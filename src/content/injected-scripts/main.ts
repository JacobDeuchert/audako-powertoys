import { registerExtensionEventHandler } from './extension-events';
import { registerScriptIntercepts } from './script-intercepts';

registerExtensionEventHandler();
registerScriptIntercepts();
