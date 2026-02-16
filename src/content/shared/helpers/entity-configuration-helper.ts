import { delay } from 'rxjs';
import { DomUtils } from '../../../utils/dom-utils';
import { UrlUtils } from '../../../utils/url-utils';

export class EntityConfigurationHelper {
  public listenForConfigChanges(): void {
    UrlUtils.subscribeToUrl()
      .pipe(delay(2000))
      .subscribe(url => {});
  }
}
