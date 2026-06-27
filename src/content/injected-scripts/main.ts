import 'reflect-metadata';
import { registerMainWorldChatWidget } from './chat-widget';
import { registerExtensionEventHandler } from './extension-events';
import { registerScriptIntercepts } from './script-intercepts';

registerMainWorldChatWidget();
registerExtensionEventHandler();
registerScriptIntercepts();
