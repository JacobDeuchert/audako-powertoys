import { AudakoApp } from '../../../models/audako-apps';
import { EntityType } from '../../../models/configuration-entity';
import { EventCondition } from '../../../models/event-condition';
import { HttpRequestUtils } from '../../../utils/http-request-utils';
import { UrlUtils } from '../../../utils/url-utils';
import { EntityChangeEvent } from './entity-event';

let editedConditions: EventCondition[] = [];

// save conditions when they get loaded in the signal configuration or the data connection configuration
function listenForConditionsPostQueryRequest(requestUrl: string, payload: any) {
  if (requestUrl.endsWith('base/condition/query/')) {

    if (UrlUtils.isActiveApp(AudakoApp.Configuration)) {
      const inSignalConfig = window.location.pathname.match(/detail\/(.){24}\/Signal/);
      const inDataConnectionConfig = window.location.pathname.match(/detail\/(.){24}\/DataConnection/);

      if (inSignalConfig || inDataConnectionConfig) {
        editedConditions = payload;
        console.info('EditedConditions: ', editedConditions);
      }
    }
  }
}

function listenForConditionSaveRequest(requestUrl: string, payload: any) {
  if (requestUrl.includes('base/condition') && !requestUrl.endsWith('query')) {
    const savedCondition = payload as EventCondition;
    const oldCondition = editedConditions.find((x) => x.Id === savedCondition.Id);

    console.info('SavedCondition: ', oldCondition);

    document.dispatchEvent(
      new CustomEvent<EntityChangeEvent>('entity-changed', {
        detail: {
          entityType: EntityType.EventCondition,
          oldEntity: oldCondition,
          newEntity: savedCondition,
        },
      })
    );
  }
}


function listenForConditionDeleteRequest(requestUrl: string, payload: any) {
  if (requestUrl.includes('base/condition')) {

    console.info('DeletedCondition');
    const urlParts = requestUrl.split('/');
    const deletedConditionId = urlParts[urlParts.length - 1];

    if (deletedConditionId && deletedConditionId.length == 24) {
      const deletedCondition = editedConditions.find(x => x.Id === deletedConditionId);
      if (deletedCondition) {
        console.info('DeletedCondition: ', deletedCondition)
        document.dispatchEvent(
          new CustomEvent<EntityChangeEvent>('entity-changed', {
            detail: {
              entityType: EntityType.EventCondition,
              oldEntity: deletedCondition,
              newEntity: null,
            },
          })
        );
      }
    }
  }
}

HttpRequestUtils.onSuccessfulPostRequest(listenForConditionsPostQueryRequest);

// listen for conditions being updated, created or deleted
HttpRequestUtils.onSuccessfulPostRequest(listenForConditionSaveRequest);
HttpRequestUtils.onSuccessfulPutRequest(listenForConditionSaveRequest);
HttpRequestUtils.onSuccessfulDeleteRequest(listenForConditionDeleteRequest);



