import { t as timer } from "./timer.0WUSU37P.js";
import { o as operate, d as createOperatorSubscriber, m as map } from "./map.BLuQZHiU.js";
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
const _ComponentUtils = class _ComponentUtils {
  static getLViewRegistry() {
    return window.__ngLViewRegistry__;
  }
  static getHeaderOffset() {
    const headerOffset = window.__ngLViewIndices__?.HEADER_OFFSET;
    return typeof headerOffset === "number" ? headerOffset : _ComponentUtils.DEFAULT_HEADER_OFFSET;
  }
  static resolveLViewFromContext(context) {
    if (Array.isArray(context)) {
      return context;
    }
    if (typeof context === "number") {
      return _ComponentUtils.getLViewRegistry()?.get(context) ?? null;
    }
    if (context && typeof context === "object") {
      const lContext = context;
      if (Array.isArray(lContext.lView)) {
        return lContext.lView;
      }
      if (typeof lContext.lViewId === "number") {
        return _ComponentUtils.getLViewRegistry()?.get(lContext.lViewId) ?? null;
      }
    }
    return null;
  }
  static unwrapRNode(value) {
    let current = value;
    while (Array.isArray(current)) {
      current = current[0];
    }
    return current;
  }
  static findNodeIndexInLView(lView, element) {
    const tView = lView[_ComponentUtils.LVIEW_TVIEW_INDEX];
    const end = tView && typeof tView.bindingStartIndex === "number" ? tView.bindingStartIndex : lView.length;
    const start = Math.min(_ComponentUtils.getHeaderOffset(), end);
    for (let i = start; i < end; i++) {
      if (_ComponentUtils.unwrapRNode(lView[i]) === element) {
        return i;
      }
    }
    return -1;
  }
  static getComponentAtNodeIndex(lView, nodeIndex) {
    const tView = lView[_ComponentUtils.LVIEW_TVIEW_INDEX];
    const tNode = tView?.data?.[nodeIndex];
    if (!tNode) {
      return null;
    }
    const directiveStart = tNode.directiveStart;
    const componentOffset = tNode.componentOffset;
    if (typeof directiveStart === "number" && typeof componentOffset === "number" && componentOffset > -1) {
      return lView[directiveStart + componentOffset] ?? null;
    }
    const directiveEnd = tNode.directiveEnd;
    if (typeof directiveStart !== "number" || typeof directiveEnd !== "number") {
      return null;
    }
    for (let i = directiveStart; i < directiveEnd; i++) {
      const directive = lView[i];
      if (directive?.constructor?.ɵcmp) {
        return directive;
      }
    }
    return null;
  }
  static getParentLView(lView) {
    const parent = lView[_ComponentUtils.LVIEW_PARENT_INDEX];
    if (!Array.isArray(parent)) {
      return null;
    }
    if (parent[_ComponentUtils.LCONTAINER_TYPE_INDEX] === true) {
      const parentLView = parent[_ComponentUtils.LVIEW_PARENT_INDEX];
      return Array.isArray(parentLView) ? parentLView : null;
    }
    return parent;
  }
  static getOwningComponentFromLView(lView) {
    let currentLView = lView;
    while (currentLView && currentLView[_ComponentUtils.LVIEW_TVIEW_INDEX]?.type === _ComponentUtils.TVIEW_EMBEDDED_TYPE) {
      currentLView = _ComponentUtils.getParentLView(currentLView);
    }
    if (!currentLView) {
      return null;
    }
    return currentLView[_ComponentUtils.LVIEW_CONTEXT_INDEX] ?? null;
  }
  static getComponentByTagName(tagName) {
    const element = document.querySelector(tagName);
    if (!element) {
      return null;
    }
    return _ComponentUtils.getComponentFromElement(element);
  }
  static getFirstRouterOutletChildByComponentSelector(componentSelector) {
    const componentElement = document.querySelector(componentSelector);
    if (!componentElement) {
      return null;
    }
    const routerOutletElement = componentElement.querySelector("router-outlet");
    if (!routerOutletElement) {
      return null;
    }
    const routedElement = routerOutletElement.firstElementChild ?? routerOutletElement.nextElementSibling;
    if (!routedElement) {
      return null;
    }
    return _ComponentUtils.getComponentFromElement(routedElement);
  }
  static getAllComponentsByTagName(tagName) {
    const elements = document.querySelectorAll(tagName);
    const components = [];
    elements.forEach((element) => {
      const component = _ComponentUtils.getComponentFromElement(element);
      if (component) {
        components.push(component);
      }
    });
    return components;
  }
  static getComponentFromElement(element) {
    const ngGetComponent = window.ng?.getComponent;
    if (typeof ngGetComponent === "function") {
      try {
        const component = ngGetComponent(element);
        if (component != null) {
          return component;
        }
      } catch {
      }
    }
    const context = element["__ngContext__"];
    console.log(`[audako-powertoys] Retrieving Angular component from element:`, {
      element,
      context
    });
    if (context == null) {
      return null;
    }
    const lView = _ComponentUtils.resolveLViewFromContext(context);
    if (!lView) {
      return null;
    }
    const nodeIndex = _ComponentUtils.findNodeIndexInLView(lView, element);
    if (nodeIndex !== -1) {
      const component = _ComponentUtils.getComponentAtNodeIndex(lView, nodeIndex);
      if (component) {
        return component;
      }
    }
    return _ComponentUtils.getOwningComponentFromLView(lView);
  }
  static extendMethod(component, name, fn) {
    const proto = component.__proto__;
    const currentMethod = proto[name];
    proto[name] = (...args) => {
      fn(args);
      return currentMethod.bind(component)(args);
    };
    return component;
  }
  static extendMethodAsync(component, name, fn) {
    const currentMethod = component[name + "_original"] ?? component[name];
    component[name + "_original"] = currentMethod;
    component[name] = async (...args) => {
      await fn(args);
      return currentMethod.bind(component)(args);
    };
    return component;
  }
  static extendProtoMethodAsync(component, name, fn) {
    const currentMethod = component.__proto__[name + "_original"] ?? component.__proto__[name];
    component.__proto__[name + "_original"] = currentMethod;
    component.__proto__[name] = async (...args) => {
      await fn(args);
      return currentMethod.bind(component)(args);
    };
    return component;
  }
};
_ComponentUtils.LVIEW_TVIEW_INDEX = 1;
_ComponentUtils.LVIEW_PARENT_INDEX = 3;
_ComponentUtils.LVIEW_CONTEXT_INDEX = 8;
_ComponentUtils.DEFAULT_HEADER_OFFSET = 25;
_ComponentUtils.TVIEW_EMBEDDED_TYPE = 2;
_ComponentUtils.LCONTAINER_TYPE_INDEX = 1;
let ComponentUtils = _ComponentUtils;
var AudakoApp = /* @__PURE__ */ ((AudakoApp2) => {
  AudakoApp2["Dashboard"] = "Dashboard";
  AudakoApp2["Configuration"] = "Configuration";
  AudakoApp2["Administration"] = "Administration";
  AudakoApp2["Maintenance"] = "Maintenance";
  return AudakoApp2;
})(AudakoApp || {});
const AppIcons = {
  [
    "Dashboard"
    /* Dashboard */
  ]: "adk adk-dashboard",
  [
    "Administration"
    /* Administration */
  ]: "adk adk-staff-assignment"
};
const _UrlUtils = class _UrlUtils {
  static openApp(app, tenantId, groupId, detailId, detailType) {
    const url = _UrlUtils.buildAppUrl(app, tenantId, groupId, detailId, detailType);
    window.location.href = url;
  }
  static buildAppUrl(app, tenantId, groupId, detailId, detailType) {
    let url = null;
    switch (app) {
      case AudakoApp.Dashboard:
        url = `/${tenantId}/application/${groupId ?? ""}`;
        if (detailId) {
          url += `/${detailId ?? ""}`;
        }
        break;
      case AudakoApp.Configuration:
        url = `/${tenantId}/config/${groupId ?? ""}`;
        if (detailId && detailType) {
          url += `/${detailId}/${detailType}`;
        }
        break;
      case AudakoApp.Administration:
        url = `administration/${tenantId}`;
        break;
    }
    return url;
  }
  static getTenantIdFromUrl(url) {
    if (!url || url.length === 0) {
      return null;
    }
    const tenantId = url.split("/")[1];
    if (tenantId.length === 24) {
      return tenantId;
    }
    return null;
  }
  static getCurrentApp() {
    return _UrlUtils.getAppFromUrl(window.location.pathname);
  }
  static getAppFromUrl(url) {
    if (!url || url.length === 0) {
      return null;
    }
    const app = url.split("/")[2];
    if (_UrlUtils.appRouteMapping[app]) {
      return _UrlUtils.appRouteMapping[app];
    }
    return null;
  }
  static getAppUrl(app) {
    let url = null;
    Object.keys(_UrlUtils.appRouteMapping).forEach((key) => {
      if (_UrlUtils.appRouteMapping[key] === app) {
        url = key;
      }
    });
    return url;
  }
  static getGroupIdFromUrl(url) {
    const app = _UrlUtils.getAppFromUrl(url);
    if (!app) {
      return null;
    }
    const matchResults = url.match(/(.{24})\/(application|config)\/(.{24})/);
    if (!matchResults) {
      return null;
    }
    return matchResults[3];
  }
  static subscribeToUrl() {
    let currentLocation = null;
    return timer(0, 50).pipe(
      filter(() => currentLocation !== window.location.pathname),
      map(() => {
        currentLocation = window.location.pathname;
        return currentLocation;
      })
    );
  }
  static isActiveApp(app) {
    const currentLocation = window.location.pathname;
    const appUrl = {
      [AudakoApp.Administration]: "administration",
      [AudakoApp.Configuration]: "config",
      [AudakoApp.Dashboard]: "application",
      [AudakoApp.Maintenance]: "maintenance"
    };
    return currentLocation.includes(appUrl[app]);
  }
  static isInEntityConfiguration() {
    const currentLocation = window.location.pathname;
    return _UrlUtils.isActiveApp(AudakoApp.Configuration) && currentLocation.includes("detail");
  }
  static getEntityConfigurationDetails() {
    const currentLocation = window.location.pathname;
    const matchResults = currentLocation.match(
      /(.{24})\/config\/(.{24})\/detail\/(.{3,24})\/([A-z]+)/
    );
    if (!matchResults) return null;
    return {
      tenantId: matchResults[1],
      groupId: matchResults[2],
      entityId: matchResults[3],
      entityType: matchResults[4]
    };
  }
  static isInEntityList() {
    const currentLocation = window.location.pathname;
    return currentLocation.includes("list");
  }
  static getEntityListDetails() {
    const currentLocation = window.location.pathname;
    const matchResults = currentLocation.match(/(.{24})\/config\/(.{24})\/list\/([A-z]+)/);
    if (!matchResults) return null;
    return {
      tenantId: matchResults[1],
      groupId: matchResults[2],
      entityType: matchResults[3]
    };
  }
};
_UrlUtils.appRouteMapping = {
  config: AudakoApp.Configuration,
  application: AudakoApp.Dashboard
};
let UrlUtils = _UrlUtils;
const EXTENSION_WORLD_SOURCE = "audako-powertoys-extension";
const MAIN_WORLD_SOURCE = "audako-powertoys-main";
const EXTENSION_EVENT_MESSAGE_TYPE = "audako-powertoys:event";
const MAIN_WORLD_EVENT_ACK_TYPE = "audako-powertoys:event:ack";
const ENTITY_UPDATED_EVENT_NAME = "entity.updated";
const ENTITY_CREATED_EVENT_NAME = "entity.created";
const ENTITY_EVENT_NAMES = [ENTITY_UPDATED_EVENT_NAME, ENTITY_CREATED_EVENT_NAME];
const ALLOWED_ENTITY_EVENT_NAMES = new Set(ENTITY_EVENT_NAMES);
function isRecord(value) {
  return !!value && typeof value === "object";
}
function isEntityEventName(value) {
  return typeof value === "string" && ALLOWED_ENTITY_EVENT_NAMES.has(value);
}
function isExtensionWorldEventMessage(value) {
  return isRecord(value) && value.source === EXTENSION_WORLD_SOURCE && value.type === EXTENSION_EVENT_MESSAGE_TYPE;
}
function isMainWorldEventAckMessage(value) {
  return isRecord(value) && value.source === MAIN_WORLD_SOURCE && value.type === MAIN_WORLD_EVENT_ACK_TYPE;
}
function dispatchEventToMainWorld(eventName, detail, requestId) {
  const message = {
    source: EXTENSION_WORLD_SOURCE,
    type: EXTENSION_EVENT_MESSAGE_TYPE,
    payload: {
      name: eventName,
      detail
    }
  };
  if (requestId) {
    message.requestId = requestId;
  }
  window.postMessage(message, "*");
}
function dispatchEventAckToExtensionWorld(eventName, requestId, ok = true) {
  const message = {
    source: MAIN_WORLD_SOURCE,
    type: MAIN_WORLD_EVENT_ACK_TYPE,
    requestId,
    payload: {
      event: eventName,
      ok
    }
  };
  window.postMessage(message, "*");
}
export {
  AudakoApp as A,
  ComponentUtils as C,
  ENTITY_CREATED_EVENT_NAME as E,
  UrlUtils as U,
  AppIcons as a,
  isExtensionWorldEventMessage as b,
  isEntityEventName as c,
  dispatchEventToMainWorld as d,
  dispatchEventAckToExtensionWorld as e,
  filter as f,
  ENTITY_UPDATED_EVENT_NAME as g,
  isMainWorldEventAckMessage as i
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3Mtd29ybGQtZXZlbnRzLkJkRWpJeVc1LmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlci5qcyIsIi4uLy4uL3NyYy91dGlscy9jb21wb25lbnQtdXRpbHMudHMiLCIuLi8uLi9zcmMvbW9kZWxzL2F1ZGFrby1hcHBzLnRzIiwiLi4vLi4vc3JjL3V0aWxzL3VybC11dGlscy50cyIsIi4uLy4uL3NyYy9jb250ZW50L3NoYXJlZC9oZWxwZXJzL2Nyb3NzLXdvcmxkLWV2ZW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSAmJiBzdWJzY3JpYmVyLm5leHQodmFsdWUpOyB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXIuanMubWFwIiwiZXhwb3J0IGNsYXNzIEFuZ3VsYXJDb21wb25lbnQgZXh0ZW5kcyBPYmplY3Qge1xuICBwdWJsaWMgX19wcm90b19fOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG50eXBlIEFuZ3VsYXJMVmlldyA9IGFueVtdO1xudHlwZSBOZ0xDb250ZXh0TGlrZSA9IHtcbiAgbFZpZXc/OiBBbmd1bGFyTFZpZXc7XG4gIGxWaWV3SWQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50VXRpbHMge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBMVklFV19UVklFV19JTkRFWCA9IDE7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExWSUVXX1BBUkVOVF9JTkRFWCA9IDM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExWSUVXX0NPTlRFWFRfSU5ERVggPSA4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQURFUl9PRkZTRVQgPSAyNTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVFZJRVdfRU1CRURERURfVFlQRSA9IDI7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExDT05UQUlORVJfVFlQRV9JTkRFWCA9IDE7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0TFZpZXdSZWdpc3RyeSgpOiBNYXA8bnVtYmVyLCBBbmd1bGFyTFZpZXc+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fbmdMVmlld1JlZ2lzdHJ5X187XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRIZWFkZXJPZmZzZXQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSAod2luZG93IGFzIGFueSkuX19uZ0xWaWV3SW5kaWNlc19fPy5IRUFERVJfT0ZGU0VUO1xuICAgIHJldHVybiB0eXBlb2YgaGVhZGVyT2Zmc2V0ID09PSAnbnVtYmVyJ1xuICAgICAgPyBoZWFkZXJPZmZzZXRcbiAgICAgIDogQ29tcG9uZW50VXRpbHMuREVGQVVMVF9IRUFERVJfT0ZGU0VUO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVzb2x2ZUxWaWV3RnJvbUNvbnRleHQoY29udGV4dDogYW55KTogQW5ndWxhckxWaWV3IHwgbnVsbCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRVdGlscy5nZXRMVmlld1JlZ2lzdHJ5KCk/LmdldChjb250ZXh0KSA/PyBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgbENvbnRleHQgPSBjb250ZXh0IGFzIE5nTENvbnRleHRMaWtlO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShsQ29udGV4dC5sVmlldykpIHtcbiAgICAgICAgcmV0dXJuIGxDb250ZXh0LmxWaWV3O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxDb250ZXh0LmxWaWV3SWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRVdGlscy5nZXRMVmlld1JlZ2lzdHJ5KCk/LmdldChsQ29udGV4dC5sVmlld0lkKSA/PyBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdW53cmFwUk5vZGUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IGN1cnJlbnQgPSB2YWx1ZTtcblxuICAgIHdoaWxlIChBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGZpbmROb2RlSW5kZXhJbkxWaWV3KGxWaWV3OiBBbmd1bGFyTFZpZXcsIGVsZW1lbnQ6IEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IHRWaWV3ID0gbFZpZXdbQ29tcG9uZW50VXRpbHMuTFZJRVdfVFZJRVdfSU5ERVhdO1xuICAgIGNvbnN0IGVuZCA9XG4gICAgICB0VmlldyAmJiB0eXBlb2YgdFZpZXcuYmluZGluZ1N0YXJ0SW5kZXggPT09ICdudW1iZXInID8gdFZpZXcuYmluZGluZ1N0YXJ0SW5kZXggOiBsVmlldy5sZW5ndGg7XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbihDb21wb25lbnRVdGlscy5nZXRIZWFkZXJPZmZzZXQoKSwgZW5kKTtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICBpZiAoQ29tcG9uZW50VXRpbHMudW53cmFwUk5vZGUobFZpZXdbaV0pID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldENvbXBvbmVudEF0Tm9kZUluZGV4KFxuICAgIGxWaWV3OiBBbmd1bGFyTFZpZXcsXG4gICAgbm9kZUluZGV4OiBudW1iZXIsXG4gICk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBjb25zdCB0VmlldyA9IGxWaWV3W0NvbXBvbmVudFV0aWxzLkxWSUVXX1RWSUVXX0lOREVYXTtcbiAgICBjb25zdCB0Tm9kZSA9IHRWaWV3Py5kYXRhPy5bbm9kZUluZGV4XTtcbiAgICBpZiAoIXROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RpdmVTdGFydCA9IHROb2RlLmRpcmVjdGl2ZVN0YXJ0O1xuICAgIGNvbnN0IGNvbXBvbmVudE9mZnNldCA9IHROb2RlLmNvbXBvbmVudE9mZnNldDtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBkaXJlY3RpdmVTdGFydCA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBjb21wb25lbnRPZmZzZXQgPT09ICdudW1iZXInICYmXG4gICAgICBjb21wb25lbnRPZmZzZXQgPiAtMVxuICAgICkge1xuICAgICAgcmV0dXJuIGxWaWV3W2RpcmVjdGl2ZVN0YXJ0ICsgY29tcG9uZW50T2Zmc2V0XSA/PyBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGl2ZUVuZCA9IHROb2RlLmRpcmVjdGl2ZUVuZDtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGl2ZVN0YXJ0ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGlyZWN0aXZlRW5kICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGRpcmVjdGl2ZVN0YXJ0OyBpIDwgZGlyZWN0aXZlRW5kOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGxWaWV3W2ldO1xuICAgICAgaWYgKGRpcmVjdGl2ZT8uY29uc3RydWN0b3I/Lsm1Y21wKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRQYXJlbnRMVmlldyhsVmlldzogQW5ndWxhckxWaWV3KTogQW5ndWxhckxWaWV3IHwgbnVsbCB7XG4gICAgY29uc3QgcGFyZW50ID0gbFZpZXdbQ29tcG9uZW50VXRpbHMuTFZJRVdfUEFSRU5UX0lOREVYXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gTENvbnRhaW5lciBtYXJrZXIgaXMgYHRydWVgIGF0IGluZGV4IDEuXG4gICAgaWYgKHBhcmVudFtDb21wb25lbnRVdGlscy5MQ09OVEFJTkVSX1RZUEVfSU5ERVhdID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBwYXJlbnRMVmlldyA9IHBhcmVudFtDb21wb25lbnRVdGlscy5MVklFV19QQVJFTlRfSU5ERVhdO1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyZW50TFZpZXcpID8gcGFyZW50TFZpZXcgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRPd25pbmdDb21wb25lbnRGcm9tTFZpZXcobFZpZXc6IEFuZ3VsYXJMVmlldyk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBsZXQgY3VycmVudExWaWV3OiBBbmd1bGFyTFZpZXcgfCBudWxsID0gbFZpZXc7XG5cbiAgICB3aGlsZSAoXG4gICAgICBjdXJyZW50TFZpZXcgJiZcbiAgICAgIGN1cnJlbnRMVmlld1tDb21wb25lbnRVdGlscy5MVklFV19UVklFV19JTkRFWF0/LnR5cGUgPT09IENvbXBvbmVudFV0aWxzLlRWSUVXX0VNQkVEREVEX1RZUEVcbiAgICApIHtcbiAgICAgIGN1cnJlbnRMVmlldyA9IENvbXBvbmVudFV0aWxzLmdldFBhcmVudExWaWV3KGN1cnJlbnRMVmlldyk7XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50TFZpZXcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50TFZpZXdbQ29tcG9uZW50VXRpbHMuTFZJRVdfQ09OVEVYVF9JTkRFWF0gPz8gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q29tcG9uZW50QnlUYWdOYW1lKHRhZ05hbWU6IHN0cmluZyk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWdOYW1lKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50RnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEZpcnN0Um91dGVyT3V0bGV0Q2hpbGRCeUNvbXBvbmVudFNlbGVjdG9yKFxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiBzdHJpbmcsXG4gICk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBjb25zdCBjb21wb25lbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb21wb25lbnRTZWxlY3Rvcik7XG4gICAgaWYgKCFjb21wb25lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZXJPdXRsZXRFbGVtZW50ID0gY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdyb3V0ZXItb3V0bGV0Jyk7XG4gICAgaWYgKCFyb3V0ZXJPdXRsZXRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZWRFbGVtZW50ID0gcm91dGVyT3V0bGV0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyByb3V0ZXJPdXRsZXRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoIXJvdXRlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBDb21wb25lbnRVdGlscy5nZXRDb21wb25lbnRGcm9tRWxlbWVudChyb3V0ZWRFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29tcG9uZW50c0J5VGFnTmFtZSh0YWdOYW1lOiBzdHJpbmcpOiBBbmd1bGFyQ29tcG9uZW50W10ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKTtcbiAgICBjb25zdCBjb21wb25lbnRzOiBBbmd1bGFyQ29tcG9uZW50W10gPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50RnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRDb21wb25lbnRGcm9tRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogQW5ndWxhckNvbXBvbmVudCB8IG51bGwge1xuICAgIGNvbnN0IG5nR2V0Q29tcG9uZW50ID0gKHdpbmRvdyBhcyBhbnkpLm5nPy5nZXRDb21wb25lbnQ7XG4gICAgaWYgKHR5cGVvZiBuZ0dldENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmdHZXRDb21wb25lbnQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgYW5kIGNvbnRpbnVlIHdpdGggaW50ZXJuYWwgZmFsbGJhY2suXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnRbJ19fbmdDb250ZXh0X18nXTtcblxuICAgIGNvbnNvbGUubG9nKGBbYXVkYWtvLXBvd2VydG95c10gUmV0cmlldmluZyBBbmd1bGFyIGNvbXBvbmVudCBmcm9tIGVsZW1lbnQ6YCwge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGNvbnRleHQsXG4gICAgfSk7XG5cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBsVmlldyA9IENvbXBvbmVudFV0aWxzLnJlc29sdmVMVmlld0Zyb21Db250ZXh0KGNvbnRleHQpO1xuICAgIGlmICghbFZpZXcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVJbmRleCA9IENvbXBvbmVudFV0aWxzLmZpbmROb2RlSW5kZXhJbkxWaWV3KGxWaWV3LCBlbGVtZW50KTtcbiAgICBpZiAobm9kZUluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50QXROb2RlSW5kZXgobFZpZXcsIG5vZGVJbmRleCk7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBvbmVudFV0aWxzLmdldE93bmluZ0NvbXBvbmVudEZyb21MVmlldyhsVmlldyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV4dGVuZE1ldGhvZChcbiAgICBjb21wb25lbnQ6IEFuZ3VsYXJDb21wb25lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGZuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXG4gICk6IEFuZ3VsYXJDb21wb25lbnQge1xuICAgIGNvbnN0IHByb3RvID0gY29tcG9uZW50Ll9fcHJvdG9fXztcbiAgICBjb25zdCBjdXJyZW50TWV0aG9kID0gcHJvdG9bbmFtZV07XG5cbiAgICBwcm90b1tuYW1lXSA9ICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICAgIGZuKGFyZ3MpO1xuICAgICAgcmV0dXJuIGN1cnJlbnRNZXRob2QuYmluZChjb21wb25lbnQpKGFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBleHRlbmRNZXRob2RBc3luYyhcbiAgICBjb21wb25lbnQ6IEFuZ3VsYXJDb21wb25lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGZuOiAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8dm9pZD4sXG4gICk6IEFuZ3VsYXJDb21wb25lbnQge1xuICAgIGNvbnN0IGN1cnJlbnRNZXRob2QgPSBjb21wb25lbnRbbmFtZSArICdfb3JpZ2luYWwnXSA/PyBjb21wb25lbnRbbmFtZV07XG4gICAgY29tcG9uZW50W25hbWUgKyAnX29yaWdpbmFsJ10gPSBjdXJyZW50TWV0aG9kO1xuXG4gICAgY29tcG9uZW50W25hbWVdID0gYXN5bmMgKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgYXdhaXQgZm4oYXJncyk7XG4gICAgICByZXR1cm4gY3VycmVudE1ldGhvZC5iaW5kKGNvbXBvbmVudCkoYXJncyk7XG4gICAgfTtcblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV4dGVuZFByb3RvTWV0aG9kQXN5bmMoXG4gICAgY29tcG9uZW50OiBBbmd1bGFyQ29tcG9uZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiBQcm9taXNlPHZvaWQ+LFxuICApOiBBbmd1bGFyQ29tcG9uZW50IHtcbiAgICBjb25zdCBjdXJyZW50TWV0aG9kID0gY29tcG9uZW50Ll9fcHJvdG9fX1tuYW1lICsgJ19vcmlnaW5hbCddID8/IGNvbXBvbmVudC5fX3Byb3RvX19bbmFtZV07XG4gICAgY29tcG9uZW50Ll9fcHJvdG9fX1tuYW1lICsgJ19vcmlnaW5hbCddID0gY3VycmVudE1ldGhvZDtcblxuICAgIGNvbXBvbmVudC5fX3Byb3RvX19bbmFtZV0gPSBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgICBhd2FpdCBmbihhcmdzKTtcbiAgICAgIHJldHVybiBjdXJyZW50TWV0aG9kLmJpbmQoY29tcG9uZW50KShhcmdzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gQXVkYWtvQXBwIHtcbiAgRGFzaGJvYXJkID0gJ0Rhc2hib2FyZCcsXG4gIENvbmZpZ3VyYXRpb24gPSAnQ29uZmlndXJhdGlvbicsXG4gIEFkbWluaXN0cmF0aW9uID0gJ0FkbWluaXN0cmF0aW9uJyxcbiAgTWFpbnRlbmFuY2UgPSAnTWFpbnRlbmFuY2UnLFxufVxuZXhwb3J0IGNvbnN0IEFwcEljb25zOiB7IFthcHAgaW4gQXVkYWtvQXBwXTogc3RyaW5nIH0gPSB7XG4gIFtBdWRha29BcHAuRGFzaGJvYXJkXTogJ2FkayBhZGstZGFzaGJvYXJkJyxcbiAgW0F1ZGFrb0FwcC5Db25maWd1cmF0aW9uXTogJ2ZhcyBmYS1jb2dzJyxcbiAgW0F1ZGFrb0FwcC5NYWludGVuYW5jZV06ICdmYSBmYS10b29scycsXG4gIFtBdWRha29BcHAuQWRtaW5pc3RyYXRpb25dOiAnYWRrIGFkay1zdGFmZi1hc3NpZ25tZW50Jyxcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEVudGl0eVR5cGUgfSBmcm9tICdhdWRha28tY29yZS1jb21wb25lbnRzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0eXBlIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdWRha29BcHAgfSBmcm9tICcuLi9tb2RlbHMvYXVkYWtvLWFwcHMnO1xuZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgYXBwUm91dGVNYXBwaW5nOiB7IFtrZXk6IHN0cmluZ106IEF1ZGFrb0FwcCB9ID0ge1xuICAgIGNvbmZpZzogQXVkYWtvQXBwLkNvbmZpZ3VyYXRpb24sXG4gICAgYXBwbGljYXRpb246IEF1ZGFrb0FwcC5EYXNoYm9hcmQsXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBvcGVuQXBwKFxuICAgIGFwcDogQXVkYWtvQXBwLFxuICAgIHRlbmFudElkOiBzdHJpbmcsXG4gICAgZ3JvdXBJZD86IHN0cmluZyxcbiAgICBkZXRhaWxJZD86IHN0cmluZyxcbiAgICBkZXRhaWxUeXBlPzogRW50aXR5VHlwZSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gVXJsVXRpbHMuYnVpbGRBcHBVcmwoYXBwLCB0ZW5hbnRJZCwgZ3JvdXBJZCwgZGV0YWlsSWQsIGRldGFpbFR5cGUpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBidWlsZEFwcFVybChcbiAgICBhcHA6IEF1ZGFrb0FwcCxcbiAgICB0ZW5hbnRJZDogc3RyaW5nLFxuICAgIGdyb3VwSWQ/OiBzdHJpbmcsXG4gICAgZGV0YWlsSWQ/OiBzdHJpbmcsXG4gICAgZGV0YWlsVHlwZT86IEVudGl0eVR5cGUsXG4gICk6IHN0cmluZyB7XG4gICAgbGV0IHVybCA9IG51bGw7XG4gICAgc3dpdGNoIChhcHApIHtcbiAgICAgIGNhc2UgQXVkYWtvQXBwLkRhc2hib2FyZDpcbiAgICAgICAgdXJsID0gYC8ke3RlbmFudElkfS9hcHBsaWNhdGlvbi8ke2dyb3VwSWQgPz8gJyd9YDtcbiAgICAgICAgaWYgKGRldGFpbElkKSB7XG4gICAgICAgICAgdXJsICs9IGAvJHtkZXRhaWxJZCA/PyAnJ31gO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBdWRha29BcHAuQ29uZmlndXJhdGlvbjpcbiAgICAgICAgdXJsID0gYC8ke3RlbmFudElkfS9jb25maWcvJHtncm91cElkID8/ICcnfWA7XG4gICAgICAgIGlmIChkZXRhaWxJZCAmJiBkZXRhaWxUeXBlKSB7XG4gICAgICAgICAgdXJsICs9IGAvJHtkZXRhaWxJZH0vJHtkZXRhaWxUeXBlfWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEF1ZGFrb0FwcC5BZG1pbmlzdHJhdGlvbjpcbiAgICAgICAgdXJsID0gYGFkbWluaXN0cmF0aW9uLyR7dGVuYW50SWR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFRlbmFudElkRnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGVuYW50SWQgPSB1cmwuc3BsaXQoJy8nKVsxXTtcblxuICAgIGlmICh0ZW5hbnRJZC5sZW5ndGggPT09IDI0KSB7XG4gICAgICByZXR1cm4gdGVuYW50SWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEN1cnJlbnRBcHAoKTogQXVkYWtvQXBwIHtcbiAgICByZXR1cm4gVXJsVXRpbHMuZ2V0QXBwRnJvbVVybCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRBcHBGcm9tVXJsKHVybDogc3RyaW5nKTogQXVkYWtvQXBwIHtcbiAgICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhcHAgPSB1cmwuc3BsaXQoJy8nKVsyXTtcblxuICAgIGlmIChVcmxVdGlscy5hcHBSb3V0ZU1hcHBpbmdbYXBwXSkge1xuICAgICAgcmV0dXJuIFVybFV0aWxzLmFwcFJvdXRlTWFwcGluZ1thcHBdO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRBcHBVcmwoYXBwOiBBdWRha29BcHApOiBzdHJpbmcge1xuICAgIGxldCB1cmwgPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKFVybFV0aWxzLmFwcFJvdXRlTWFwcGluZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKFVybFV0aWxzLmFwcFJvdXRlTWFwcGluZ1trZXldID09PSBhcHApIHtcbiAgICAgICAgdXJsID0ga2V5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEdyb3VwSWRGcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcHAgPSBVcmxVdGlscy5nZXRBcHBGcm9tVXJsKHVybCk7XG4gICAgaWYgKCFhcHApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaFJlc3VsdHMgPSB1cmwubWF0Y2goLyguezI0fSlcXC8oYXBwbGljYXRpb258Y29uZmlnKVxcLyguezI0fSkvKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaFJlc3VsdHNbM107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZVRvVXJsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IG51bGw7XG4gICAgcmV0dXJuIHRpbWVyKDAsIDUwKS5waXBlKFxuICAgICAgZmlsdGVyKCgpID0+IGN1cnJlbnRMb2NhdGlvbiAhPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSxcbiAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRMb2NhdGlvbjtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzQWN0aXZlQXBwKGFwcDogQXVkYWtvQXBwKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGFwcFVybDogeyBbYXBwIGluIEF1ZGFrb0FwcF06IHN0cmluZyB9ID0ge1xuICAgICAgW0F1ZGFrb0FwcC5BZG1pbmlzdHJhdGlvbl06ICdhZG1pbmlzdHJhdGlvbicsXG4gICAgICBbQXVkYWtvQXBwLkNvbmZpZ3VyYXRpb25dOiAnY29uZmlnJyxcbiAgICAgIFtBdWRha29BcHAuRGFzaGJvYXJkXTogJ2FwcGxpY2F0aW9uJyxcbiAgICAgIFtBdWRha29BcHAuTWFpbnRlbmFuY2VdOiAnbWFpbnRlbmFuY2UnLFxuICAgIH07XG5cbiAgICByZXR1cm4gY3VycmVudExvY2F0aW9uLmluY2x1ZGVzKGFwcFVybFthcHBdKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNJbkVudGl0eUNvbmZpZ3VyYXRpb24oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHJldHVybiBVcmxVdGlscy5pc0FjdGl2ZUFwcChBdWRha29BcHAuQ29uZmlndXJhdGlvbikgJiYgY3VycmVudExvY2F0aW9uLmluY2x1ZGVzKCdkZXRhaWwnKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RW50aXR5Q29uZmlndXJhdGlvbkRldGFpbHMoKToge1xuICAgIHRlbmFudElkOiBzdHJpbmc7XG4gICAgZ3JvdXBJZDogc3RyaW5nO1xuICAgIGVudGl0eUlkOiBzdHJpbmc7XG4gICAgZW50aXR5VHlwZTogRW50aXR5VHlwZTtcbiAgfSB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgY29uc3QgbWF0Y2hSZXN1bHRzID0gY3VycmVudExvY2F0aW9uLm1hdGNoKFxuICAgICAgLyguezI0fSlcXC9jb25maWdcXC8oLnsyNH0pXFwvZGV0YWlsXFwvKC57MywyNH0pXFwvKFtBLXpdKykvLFxuICAgICk7XG4gICAgaWYgKCFtYXRjaFJlc3VsdHMpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICB0ZW5hbnRJZDogbWF0Y2hSZXN1bHRzWzFdLFxuICAgICAgZ3JvdXBJZDogbWF0Y2hSZXN1bHRzWzJdLFxuICAgICAgZW50aXR5SWQ6IG1hdGNoUmVzdWx0c1szXSxcbiAgICAgIGVudGl0eVR5cGU6IG1hdGNoUmVzdWx0c1s0XSBhcyBFbnRpdHlUeXBlLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSW5FbnRpdHlMaXN0KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICByZXR1cm4gY3VycmVudExvY2F0aW9uLmluY2x1ZGVzKCdsaXN0Jyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEVudGl0eUxpc3REZXRhaWxzKCk6IHtcbiAgICB0ZW5hbnRJZDogc3RyaW5nO1xuICAgIGdyb3VwSWQ6IHN0cmluZztcbiAgICBlbnRpdHlUeXBlOiBFbnRpdHlUeXBlO1xuICB9IHtcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHRzID0gY3VycmVudExvY2F0aW9uLm1hdGNoKC8oLnsyNH0pXFwvY29uZmlnXFwvKC57MjR9KVxcL2xpc3RcXC8oW0Etel0rKS8pO1xuICAgIGlmICghbWF0Y2hSZXN1bHRzKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZW5hbnRJZDogbWF0Y2hSZXN1bHRzWzFdLFxuICAgICAgZ3JvdXBJZDogbWF0Y2hSZXN1bHRzWzJdLFxuICAgICAgZW50aXR5VHlwZTogbWF0Y2hSZXN1bHRzWzNdIGFzIEVudGl0eVR5cGUsXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEVYVEVOU0lPTl9XT1JMRF9TT1VSQ0UgPSAnYXVkYWtvLXBvd2VydG95cy1leHRlbnNpb24nIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IE1BSU5fV09STERfU09VUkNFID0gJ2F1ZGFrby1wb3dlcnRveXMtbWFpbicgYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgRVhURU5TSU9OX0VWRU5UX01FU1NBR0VfVFlQRSA9ICdhdWRha28tcG93ZXJ0b3lzOmV2ZW50JyBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBNQUlOX1dPUkxEX0VWRU5UX0FDS19UWVBFID0gJ2F1ZGFrby1wb3dlcnRveXM6ZXZlbnQ6YWNrJyBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9VUERBVEVEX0VWRU5UX05BTUUgPSAnZW50aXR5LnVwZGF0ZWQnIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IEVOVElUWV9DUkVBVEVEX0VWRU5UX05BTUUgPSAnZW50aXR5LmNyZWF0ZWQnIGFzIGNvbnN0O1xuXG5jb25zdCBFTlRJVFlfRVZFTlRfTkFNRVMgPSBbRU5USVRZX1VQREFURURfRVZFTlRfTkFNRSwgRU5USVRZX0NSRUFURURfRVZFTlRfTkFNRV0gYXMgY29uc3Q7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5Q3JlYXRlZEV2ZW50UGF5bG9hZCB7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ6IHN0cmluZztcbiAgdGVuYW50SWQ6IHN0cmluZztcbiAgZ3JvdXBJZDogc3RyaW5nO1xuICBzb3VyY2VUb29sOiAnY3JlYXRlLWVudGl0eSc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBFbnRpdHlFdmVudE5hbWUgPSAodHlwZW9mIEVOVElUWV9FVkVOVF9OQU1FUylbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgRXh0ZW5zaW9uV29ybGRFdmVudE1lc3NhZ2UgPSB7XG4gIHNvdXJjZTogdHlwZW9mIEVYVEVOU0lPTl9XT1JMRF9TT1VSQ0U7XG4gIHR5cGU6IHR5cGVvZiBFWFRFTlNJT05fRVZFTlRfTUVTU0FHRV9UWVBFO1xuICByZXF1ZXN0SWQ/OiBzdHJpbmc7XG4gIHBheWxvYWQ/OiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBkZXRhaWw/OiBhbnk7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBNYWluV29ybGRFdmVudEFja01lc3NhZ2UgPSB7XG4gIHNvdXJjZTogdHlwZW9mIE1BSU5fV09STERfU09VUkNFO1xuICB0eXBlOiB0eXBlb2YgTUFJTl9XT1JMRF9FVkVOVF9BQ0tfVFlQRTtcbiAgcmVxdWVzdElkPzogc3RyaW5nO1xuICBwYXlsb2FkPzoge1xuICAgIGV2ZW50Pzogc3RyaW5nO1xuICAgIG9rPzogYm9vbGVhbjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBTExPV0VEX0VOVElUWV9FVkVOVF9OQU1FUyA9IG5ldyBTZXQ8c3RyaW5nPihFTlRJVFlfRVZFTlRfTkFNRVMpO1xuXG5mdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogYW55KTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgYW55PiB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUV2ZW50TmFtZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRW50aXR5RXZlbnROYW1lIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgQUxMT1dFRF9FTlRJVFlfRVZFTlRfTkFNRVMuaGFzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZW5zaW9uV29ybGRFdmVudE1lc3NhZ2UodmFsdWU6IGFueSk6IHZhbHVlIGlzIEV4dGVuc2lvbldvcmxkRXZlbnRNZXNzYWdlIHtcbiAgcmV0dXJuIChcbiAgICBpc1JlY29yZCh2YWx1ZSkgJiZcbiAgICB2YWx1ZS5zb3VyY2UgPT09IEVYVEVOU0lPTl9XT1JMRF9TT1VSQ0UgJiZcbiAgICB2YWx1ZS50eXBlID09PSBFWFRFTlNJT05fRVZFTlRfTUVTU0FHRV9UWVBFXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01haW5Xb3JsZEV2ZW50QWNrTWVzc2FnZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgTWFpbldvcmxkRXZlbnRBY2tNZXNzYWdlIHtcbiAgcmV0dXJuIChcbiAgICBpc1JlY29yZCh2YWx1ZSkgJiZcbiAgICB2YWx1ZS5zb3VyY2UgPT09IE1BSU5fV09STERfU09VUkNFICYmXG4gICAgdmFsdWUudHlwZSA9PT0gTUFJTl9XT1JMRF9FVkVOVF9BQ0tfVFlQRVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudFRvTWFpbldvcmxkKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IGFueSwgcmVxdWVzdElkPzogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IG1lc3NhZ2U6IEV4dGVuc2lvbldvcmxkRXZlbnRNZXNzYWdlID0ge1xuICAgIHNvdXJjZTogRVhURU5TSU9OX1dPUkxEX1NPVVJDRSxcbiAgICB0eXBlOiBFWFRFTlNJT05fRVZFTlRfTUVTU0FHRV9UWVBFLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgIGRldGFpbCxcbiAgICB9LFxuICB9O1xuXG4gIGlmIChyZXF1ZXN0SWQpIHtcbiAgICBtZXNzYWdlLnJlcXVlc3RJZCA9IHJlcXVlc3RJZDtcbiAgfVxuXG4gIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudEFja1RvRXh0ZW5zaW9uV29ybGQoXG4gIGV2ZW50TmFtZTogc3RyaW5nLFxuICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgb2sgPSB0cnVlLFxuKTogdm9pZCB7XG4gIGNvbnN0IG1lc3NhZ2U6IE1haW5Xb3JsZEV2ZW50QWNrTWVzc2FnZSA9IHtcbiAgICBzb3VyY2U6IE1BSU5fV09STERfU09VUkNFLFxuICAgIHR5cGU6IE1BSU5fV09STERfRVZFTlRfQUNLX1RZUEUsXG4gICAgcmVxdWVzdElkLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBvayxcbiAgICB9LFxuICB9O1xuXG4gIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xufVxuIl0sIm5hbWVzIjpbIkF1ZGFrb0FwcCJdLCJtYXBwaW5ncyI6Ijs7QUFFTyxTQUFTLE9BQU8sV0FBVyxTQUFTO0FBQ3ZDLFNBQU8sUUFBUSxTQUFVLFFBQVEsWUFBWTtBQUN6QyxRQUFJLFFBQVE7QUFDWixXQUFPLFVBQVUseUJBQXlCLFlBQVksU0FBVSxPQUFPO0FBQUUsYUFBTyxVQUFVLEtBQUssU0FBUyxPQUFPLE9BQU8sS0FBSyxXQUFXLEtBQUssS0FBSztBQUFBLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDekosQ0FBQztBQUNMO0FDTU8sTUFBTSxrQkFBTixNQUFNLGdCQUFlO0FBQUEsRUFRMUIsT0FBZSxtQkFBMEQ7QUFDdkUsV0FBUSxPQUFlO0FBQUEsRUFDekI7QUFBQSxFQUVBLE9BQWUsa0JBQTBCO0FBQ3ZDLFVBQU0sZUFBZ0IsT0FBZSxvQkFBb0I7QUFDekQsV0FBTyxPQUFPLGlCQUFpQixXQUMzQixlQUNBLGdCQUFlO0FBQUEsRUFDckI7QUFBQSxFQUVB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
