export class AngularComponent extends Object {
  public __proto__: { [name: string]: any };
  constructor() {
    super();
  }
}

export class ComponentUtils {
  public static getComponentByTagName(tagName: string): AngularComponent | null {
    const element = document.querySelector(tagName);
    if (!element) {
      return null;
    }
    return ComponentUtils.getComponentFromElement(element);
  }

  public static getAllComponentsByTagName(tagName: string): AngularComponent[] {
    const elements = document.querySelectorAll(tagName);
    const components: AngularComponent[] = [];
    elements.forEach((element) => {
      const component = ComponentUtils.getComponentFromElement(element);
      if (component) {
        components.push(component);
      }
    });
    return components;
  }

  public static getComponentFromElement(element: Element): AngularComponent | null {
    const context = element['__ngContext__'];

    if (context == null) {
      return null;
    }

    // Angular 14+: __ngContext__ is a numeric ID into the LView registry
    if (typeof context === 'number') {
      const registry: Map<number, any[]> | undefined = (window as any).__ngLViewRegistry__;
      if (!registry) {
        return null;
      }

      const lView = registry.get(context);
      if (!lView) {
        return null;
      }

      return lView[8] ?? null;
    }

    // Angular 9-13: __ngContext__ is the LView array directly
    if (Array.isArray(context)) {
      return context[8] ?? null;
    }

    return null;
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
