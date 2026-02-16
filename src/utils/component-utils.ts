export class AngularComponent extends Object {
  public __proto__: { [name: string]: any };
  constructor() {
    super();
  }
}

type AngularLView = any[];
type NgLContextLike = {
  lView?: AngularLView;
  lViewId?: number;
};

export class ComponentUtils {
  private static readonly LVIEW_TVIEW_INDEX = 1;
  private static readonly LVIEW_PARENT_INDEX = 3;
  private static readonly LVIEW_CONTEXT_INDEX = 8;
  private static readonly DEFAULT_HEADER_OFFSET = 25;
  private static readonly TVIEW_EMBEDDED_TYPE = 2;
  private static readonly LCONTAINER_TYPE_INDEX = 1;

  private static getLViewRegistry(): Map<number, AngularLView> | undefined {
    return (window as any).__ngLViewRegistry__;
  }

  private static getHeaderOffset(): number {
    const headerOffset = (window as any).__ngLViewIndices__?.HEADER_OFFSET;
    return typeof headerOffset === 'number'
      ? headerOffset
      : ComponentUtils.DEFAULT_HEADER_OFFSET;
  }

  private static resolveLViewFromContext(context: any): AngularLView | null {
    if (Array.isArray(context)) {
      return context;
    }

    if (typeof context === 'number') {
      return ComponentUtils.getLViewRegistry()?.get(context) ?? null;
    }

    if (context && typeof context === 'object') {
      const lContext = context as NgLContextLike;

      if (Array.isArray(lContext.lView)) {
        return lContext.lView;
      }

      if (typeof lContext.lViewId === 'number') {
        return ComponentUtils.getLViewRegistry()?.get(lContext.lViewId) ?? null;
      }
    }

    return null;
  }

  private static unwrapRNode(value: any): any {
    let current = value;

    while (Array.isArray(current)) {
      current = current[0];
    }

    return current;
  }

  private static findNodeIndexInLView(lView: AngularLView, element: Element): number {
    const tView = lView[ComponentUtils.LVIEW_TVIEW_INDEX];
    const end =
      tView && typeof tView.bindingStartIndex === 'number' ? tView.bindingStartIndex : lView.length;
    const start = Math.min(ComponentUtils.getHeaderOffset(), end);

    for (let i = start; i < end; i++) {
      if (ComponentUtils.unwrapRNode(lView[i]) === element) {
        return i;
      }
    }

    return -1;
  }

  private static getComponentAtNodeIndex(
    lView: AngularLView,
    nodeIndex: number,
  ): AngularComponent | null {
    const tView = lView[ComponentUtils.LVIEW_TVIEW_INDEX];
    const tNode = tView?.data?.[nodeIndex];
    if (!tNode) {
      return null;
    }

    const directiveStart = tNode.directiveStart;
    const componentOffset = tNode.componentOffset;

    if (
      typeof directiveStart === 'number' &&
      typeof componentOffset === 'number' &&
      componentOffset > -1
    ) {
      return lView[directiveStart + componentOffset] ?? null;
    }

    const directiveEnd = tNode.directiveEnd;
    if (typeof directiveStart !== 'number' || typeof directiveEnd !== 'number') {
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

  private static getParentLView(lView: AngularLView): AngularLView | null {
    const parent = lView[ComponentUtils.LVIEW_PARENT_INDEX];
    if (!Array.isArray(parent)) {
      return null;
    }

    // LContainer marker is `true` at index 1.
    if (parent[ComponentUtils.LCONTAINER_TYPE_INDEX] === true) {
      const parentLView = parent[ComponentUtils.LVIEW_PARENT_INDEX];
      return Array.isArray(parentLView) ? parentLView : null;
    }

    return parent;
  }

  private static getOwningComponentFromLView(lView: AngularLView): AngularComponent | null {
    let currentLView: AngularLView | null = lView;

    while (
      currentLView &&
      currentLView[ComponentUtils.LVIEW_TVIEW_INDEX]?.type === ComponentUtils.TVIEW_EMBEDDED_TYPE
    ) {
      currentLView = ComponentUtils.getParentLView(currentLView);
    }

    if (!currentLView) {
      return null;
    }

    return currentLView[ComponentUtils.LVIEW_CONTEXT_INDEX] ?? null;
  }

  public static getComponentByTagName(tagName: string): AngularComponent | null {
    const element = document.querySelector(tagName);
    if (!element) {
      return null;
    }
    return ComponentUtils.getComponentFromElement(element);
  }

  public static getFirstRouterOutletChildByComponentSelector(
    componentSelector: string,
  ): AngularComponent | null {
    const componentElement = document.querySelector(componentSelector);
    if (!componentElement) {
      return null;
    }

    const routerOutletElement = componentElement.querySelector('router-outlet');
    if (!routerOutletElement) {
      return null;
    }

    const routedElement = routerOutletElement.firstElementChild ?? routerOutletElement.nextElementSibling;
    if (!routedElement) {
      return null;
    }

    return ComponentUtils.getComponentFromElement(routedElement);
  }

  public static getAllComponentsByTagName(tagName: string): AngularComponent[] {
    const elements = document.querySelectorAll(tagName);
    const components: AngularComponent[] = [];
    elements.forEach(element => {
      const component = ComponentUtils.getComponentFromElement(element);
      if (component) {
        components.push(component);
      }
    });
    return components;
  }

  public static getComponentFromElement(element: Element): AngularComponent | null {
    const ngGetComponent = (window as any).ng?.getComponent;
    if (typeof ngGetComponent === 'function') {
      try {
        const component = ngGetComponent(element);
        if (component != null) {
          return component;
        }
      } catch {
        // Ignore and continue with internal fallback.
      }
    }

    const context = element['__ngContext__'];

    console.log(`[audako-powertoys] Retrieving Angular component from element:`, {
      element,
      context,
    });

    if (context == null) {
      return null;
    }

    const lView = ComponentUtils.resolveLViewFromContext(context);
    if (!lView) {
      return null;
    }

    const nodeIndex = ComponentUtils.findNodeIndexInLView(lView, element);
    if (nodeIndex !== -1) {
      const component = ComponentUtils.getComponentAtNodeIndex(lView, nodeIndex);
      if (component) {
        return component;
      }
    }

    return ComponentUtils.getOwningComponentFromLView(lView);
  }

  public static extendMethod(
    component: AngularComponent,
    name: string,
    fn: (...args: any[]) => void,
  ): AngularComponent {
    const proto = component.__proto__;
    const currentMethod = proto[name];

    proto[name] = (...args: any) => {
      fn(args);
      return currentMethod.bind(component)(args);
    };

    return component;
  }

  public static extendMethodAsync(
    component: AngularComponent,
    name: string,
    fn: (...args: any[]) => Promise<void>,
  ): AngularComponent {
    const currentMethod = component[name + '_original'] ?? component[name];
    component[name + '_original'] = currentMethod;

    component[name] = async (...args: any) => {
      await fn(args);
      return currentMethod.bind(component)(args);
    };

    return component;
  }

  public static extendProtoMethodAsync(
    component: AngularComponent,
    name: string,
    fn: (...args: any[]) => Promise<void>,
  ): AngularComponent {
    const currentMethod = component.__proto__[name + '_original'] ?? component.__proto__[name];
    component.__proto__[name + '_original'] = currentMethod;

    component.__proto__[name] = async (...args: any) => {
      await fn(args);
      return currentMethod.bind(component)(args);
    };

    return component;
  }
}
