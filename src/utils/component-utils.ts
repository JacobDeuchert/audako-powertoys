

export class AngularComponent extends Object {
  public __proto__: {[name: string]: any}
  constructor() { 
    super();

  }
}

export class ComponentUtils {

  public static getComponentFromElement(element: Element): AngularComponent {
    const context: any[] = element['__ngContext__'];

    if (!context) return null;

    return context[context.length - 1];
  }

  public static extendMethod(component: AngularComponent, name: string, fn: (...args: any[]) => void): AngularComponent {
    const proto = component.__proto__;
    const currentMethod = proto[name]; 

    proto[name] = (...args: any) => {
      fn(args);
      return currentMethod.bind(component)(args);
    }

    return component;
  }

  public static extendMethodAsync(component: AngularComponent, name: string, fn: (...args: any[]) => Promise<void>): AngularComponent {
  
    const currentMethod = component[name + '_original'] ?? component[name];
    component[name + '_original'] = currentMethod; 

    component[name] = async (...args: any) => {
      await fn(args);
      return currentMethod.bind(component)(args);
    }

    return component;
  }


  public static extendProtoMethodAsync(component: AngularComponent, name: string, fn: (...args: any[]) => Promise<void>): AngularComponent {
  
    const currentMethod = component.__proto__[name + '_original'] ?? component.__proto__[name];
    component.__proto__[name + '_original'] = currentMethod; 

    component.__proto__[name] = async (...args: any) => {
      await fn(args);
      return currentMethod.bind(component)(args);
    }

    return component;
  }
}