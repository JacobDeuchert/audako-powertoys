import { delay, filter, finalize, first, firstValueFrom, isObservable, map, Observable, of, switchMap, tap } from 'rxjs';
import { ComponentUtils } from '../../../utils/component-utils';
import { DomUtils } from '../../../utils/dom-utils';
import { UrlUtils } from '../../../utils/url-utils';

let editedEntity = null;

const detailComponentRendered = () => {
  return DomUtils.watchForDomChanges(document).pipe(
    map(() => document.getElementsByTagName('audako4-config-detail').item(0)),
    filter((element) => !!element),
    first(), 
    finalize(() => console.info('Finalizing'))
  )
}

const listComponentRendered = () => {
  return DomUtils.watchForDomChanges(document).pipe(
    map(() => document.getElementsByTagName('audako4-config-detail').item(0)),
    filter((element) => !!element),
    first()
  )
}
let a = 0
UrlUtils.subscribeToUrl().pipe(
  filter(() => UrlUtils.isInEntityConfiguration()),
  map(() => UrlUtils.getEntityConfigurationDetails()?.entityType),
  switchMap(configuredType => {
    console.info(configuredType);
    if (!configuredType) {
      return of(null);
    }
    return detailComponentRendered()
  }),
  tap(x => console.info(x, 'ComponentElement')),
).subscribe(detailComponentElement => {
  if (detailComponentElement) {
    const comp = ComponentUtils.getComponentFromElement(detailComponentElement) as any;
    console.info(comp);
    console.info(comp['overridden_save']);
    comp['overridden_save'] = true;
    let b = a++;
    
    
    const saveOverride = async () => {
      console.info(b);
      let savedValue = comp.formComponent.getValues();
      if (isObservable(savedValue)) {
        savedValue = await firstValueFrom((comp.formComponent.getValues() as Observable<any>));
      }
      
      console.info(JSON.parse(JSON.stringify(comp.Data)), savedValue);
    }
    ComponentUtils.extendMethodAsync(comp, 'save', saveOverride);
  } 
      
  
  // if (UrlUtils.isInEntityConfiguration()) {
  //   console.info('1')
  //   const configDetailComponent = document.getElementsByTagName('audako4-config-detail').item(0);
  //   if (configDetailComponent) { 
  //     const context: any[] = configDetailComponent['__ngContext__'];
  //     const comp = context[context.length - 1];
  //     console.info(comp.__proto__);
  //     const currentSave = comp.__proto__.save;
  //     comp.__proto__.save = () => {
  //       console.info(comp);
  //       const saved = comp.formComponent.getValues();
  //       console.info(JSON.parse(JSON.stringify(comp.Data)), JSON.parse(JSON.stringify(saved)))
  //       currentSave.bind(comp)();
  //     }
  //   }
  // }
});

function listenToConfigurationEntered(requestUrl: string, responseBody: any) {

}

function matchesEntityList(): string[] {
  return window.location.pathname.match(/config\/()/)
}