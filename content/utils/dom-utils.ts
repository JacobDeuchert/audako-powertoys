import { debounceTime, finalize, Observable, Subject } from 'rxjs';

type DomMutation =  {
    mutations: MutationRecord[];
    observer: MutationObserver;
}

export class DomUtils {

    public static watchForDomChanges(element: HTMLElement | Document, debounce: number = 100): Observable<DomMutation> {
        const changeSubj = new Subject<DomMutation>();

        const config = { attributes: true, childList: true, subtree: true };
        const mutationObserver = new MutationObserver((mutations, observer) => {
            changeSubj.next({mutations: mutations, observer: observer});
        });
        
        mutationObserver.observe(element, config);

        return changeSubj.asObservable().pipe(
            debounceTime(debounce), 
            finalize(() => { mutationObserver.disconnect(); })
        );
    }

    public static mapHTMLCollection<T>(htmlCollection: HTMLCollection, modFunction: (element: Element, index?: number) => T): T[] {
        
        const result: T[] = [];
        for (let i = 0; i < htmlCollection.length; i++) {
            const element = htmlCollection.item(i);
            result.push(modFunction(element, i));
        }

        return result;
    }

    public static createMatTableDefinition(): HTMLElement {
        const td = document.createElement('td');
        td.setAttribute('role', 'gridcell');
        td.classList.add(...['mat-cell', 'cdk-cell', 'powertoys-cell']);
        return td;
    }

    public static createMatTableHeader(): HTMLElement {
        const th = document.createElement('th');
        th.setAttribute('role', 'gridcell');
        th.classList.add(...['mat-header-cell', 'cdk-header-cell', 'powertoys-header-cell']);
        return th;

    }
}