import { delay, distinctUntilChanged, filter, finalize, first, firstValueFrom, isObservable, map, Observable, of, switchMap, tap } from 'rxjs';
import { ConfigurationEntity, EntityType } from 'audako-core-components';
import { ComponentUtils } from '../../../utils/component-utils';
import { DomUtils } from '../../../utils/dom-utils';
import { UrlUtils } from '../../../utils/url-utils';


const detailComponentRendered = () => {
  return DomUtils.watchForDomChanges(document).pipe(
    map(() => document.getElementsByTagName('audako4-config-detail').item(0)),
    filter((element) => !!element),
    first()
  )
}

const listComponentRendered = () => {
  return DomUtils.watchForDomChanges(document).pipe(
    map(() => document.getElementsByTagName('audako4-config-linelist').item(0)),
    filter((element) => !!element),
    distinctUntilChanged()
  )
}

UrlUtils.subscribeToUrl().pipe(
  filter(() => UrlUtils.isInEntityConfiguration()),
  map(() => UrlUtils.getEntityConfigurationDetails()?.entityType),
  switchMap(configuredType => {
    console.info(configuredType);
    if (!configuredType) {
      return of(null);
    }
    return detailComponentRendered()
  })
).subscribe(detailComponentElement => {
  if (detailComponentElement) {
    const comp = ComponentUtils.getComponentFromElement(detailComponentElement) as any;  
    const saveOverride = async () => {
      
      let savedValue = comp.formComponent.getValues();
      if (isObservable(savedValue)) {
        savedValue = await firstValueFrom((comp.formComponent.getValues() as Observable<any>));
      }
      console.info(comp);
      if (comp.formComponent.isValid()) {
        dispatchEntityEvent(comp.Type as EntityType, comp.Data, savedValue);
      }
    }
    ComponentUtils.extendMethodAsync(comp, 'save', saveOverride);
  } 
});

UrlUtils.subscribeToUrl().pipe(
  map(() => UrlUtils.getEntityListDetails()?.entityType),
  switchMap((entityType: EntityType) => {
    if (!entityType) {
      return of(null);
    }
    return listComponentRendered();
  }),
).subscribe(listComponentElement => {
  if (listComponentElement) {
    const comp = ComponentUtils.getComponentFromElement(listComponentElement);
    const deleteOverride = async () => {
      const hoveredItem = comp['hoveredItem'];
      const entityType = comp['Type'];
      const classType = comp['types'][entityType].Type;
      const entity = await firstValueFrom(comp['httpService'].getOne(hoveredItem.Id, classType));
      dispatchEntityEvent(entityType as EntityType, entity as ConfigurationEntity, null);
    };
    ComponentUtils.extendMethodAsync(comp, 'deleteItem', deleteOverride);
  }
  
});



function dispatchEntityEvent(entityType: EntityType, oldEntity: ConfigurationEntity, newEntity: ConfigurationEntity): void {
  document.dispatchEvent(
    new CustomEvent<any>('entity-changed', { detail: { oldEntity: oldEntity, newEntity: newEntity, entityType: entityType } })
  );
}


function matchesEntityList(): string[] {
  return window.location.pathname.match(/config\/()/)
}
