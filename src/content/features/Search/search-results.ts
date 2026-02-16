import { EntityType } from 'audako-core-components';
import type { Component } from 'svelte';
import { AppIcons, AudakoApp } from '../../../models/audako-apps';
import { UrlUtils } from '../../../utils/url-utils';

export type SearchCategory = EntityType | 'Tenant';
export type SearchResultType = 'tenant' | 'group' | 'generic-entity' | 'signal';

const TENANT_CONTEXT_TYPE = 'tenant.v1';
const GROUP_CONTEXT_TYPE = 'group.v1';
const GENERIC_ENTITY_CONTEXT_TYPE = 'generic-entity.v1';
const SIGNAL_CONTEXT_TYPE = 'signal.v1';
type SearchResultContextType =
  | typeof TENANT_CONTEXT_TYPE
  | typeof GROUP_CONTEXT_TYPE
  | typeof GENERIC_ENTITY_CONTEXT_TYPE
  | typeof SIGNAL_CONTEXT_TYPE;

export type CategorySearchResult = { category: SearchCategory; results: SearchResult[] };
export type CategorizedSearchResults = CategorySearchResult[];

export interface SearchResultInfoComponent {
  component: Component;
  props: Record<string, any>;
}

export interface StoredSearchResult {
  type: SearchResultType;
  category: SearchCategory;
  title: string;
  infoText?: string;
  icon: string;
  context: unknown;
  selectedAt: number;
}

export abstract class ResultAction<TContext extends Record<string, any>> {
  constructor(public readonly icon: string) {}

  public execute(context: TContext): void {
    this.onExecute(context);
  }

  protected abstract onExecute(context: TContext): void;
}

export class CallbackResultAction<
  TContext extends Record<string, any>,
> extends ResultAction<TContext> {
  constructor(
    icon: string,
    private readonly callback: (context: TContext) => void,
  ) {
    super(icon);
  }

  protected onExecute(context: TContext): void {
    this.callback(context);
  }
}

interface SearchResultParams<TContext extends Record<string, any>> {
  title: string;
  icon: string;
  infoText?: string;
  tooltip: () => Promise<string>;
  context: TContext;
  extraActions?: ResultAction<TContext>[];
  infoComponent?: SearchResultInfoComponent;
}

export abstract class SearchResult<TContext extends Record<string, any> = Record<string, any>> {
  public readonly title: string;
  public readonly icon: string;
  public readonly infoText?: string;
  public readonly tooltip: () => Promise<string>;
  public readonly context: TContext;
  public readonly extraActions: ResultAction<TContext>[];
  public readonly infoComponent?: SearchResultInfoComponent;

  protected constructor(params: SearchResultParams<TContext>) {
    this.title = params.title;
    this.icon = params.icon;
    this.infoText = params.infoText;
    this.tooltip = params.tooltip;
    this.context = params.context;
    this.extraActions = params.extraActions ?? [];
    this.infoComponent = params.infoComponent;
  }

  public abstract readonly type: SearchResultType;
  public abstract readonly category: SearchCategory;

  protected abstract onDefaultAction(context: TContext): void;

  public defaultAction(): void {
    this.onDefaultAction(this.context);
  }

  protected serializeContext(context: TContext): unknown {
    return context;
  }

  public toStoredSearchResult(selectedAt: number): StoredSearchResult {
    return {
      type: this.type,
      category: this.category,
      title: this.title,
      infoText: this.infoText,
      icon: this.icon,
      context: this.serializeContext(this.context),
      selectedAt,
    };
  }
}

const buildDefaultTooltip = (title: string) => () => Promise.resolve(title);

export interface TenantSearchResultContext {
  tenantId: string;
  defaultApp: AudakoApp;
  isRootTenant: boolean;
}

interface SerializedTenantSearchResultContext extends TenantSearchResultContext {
  contextType: typeof TENANT_CONTEXT_TYPE;
}

export class TenantSearchResult extends SearchResult<TenantSearchResultContext> {
  public readonly type: SearchResultType = 'tenant';
  public readonly category: SearchCategory = 'Tenant';

  constructor(params: {
    title: string;
    icon: string;
    infoText?: string;
    tooltip?: () => Promise<string>;
    context: TenantSearchResultContext;
  }) {
    const extraActions: ResultAction<TenantSearchResultContext>[] = [
      new CallbackResultAction(AppIcons.Administration, context => {
        UrlUtils.openApp(AudakoApp.Administration, context.tenantId);
      }),
    ];

    if (params.context.isRootTenant) {
      extraActions.unshift(
        new CallbackResultAction(AppIcons.Dashboard, context => {
          UrlUtils.openApp(AudakoApp.Dashboard, context.tenantId);
        }),
      );
    }

    super({
      title: params.title,
      icon: params.icon,
      infoText: params.infoText,
      tooltip: params.tooltip ?? buildDefaultTooltip(params.title),
      context: params.context,
      extraActions,
    });
  }

  protected override serializeContext(
    context: TenantSearchResultContext,
  ): SerializedTenantSearchResultContext {
    return {
      contextType: TENANT_CONTEXT_TYPE,
      ...context,
    };
  }

  protected onDefaultAction(context: TenantSearchResultContext): void {
    UrlUtils.openApp(context.defaultApp, context.tenantId);
  }
}

export interface GroupSearchResultContext {
  tenantId: string;
  groupId: string;
  isEntryPoint: boolean;
}

interface SerializedGroupSearchResultContext extends GroupSearchResultContext {
  contextType: typeof GROUP_CONTEXT_TYPE;
}

export class GroupSearchResult extends SearchResult<GroupSearchResultContext> {
  public readonly type: SearchResultType = 'group';
  public readonly category: SearchCategory = EntityType.Group;

  constructor(params: {
    title: string;
    icon: string;
    infoText?: string;
    tooltip?: () => Promise<string>;
    context: GroupSearchResultContext;
  }) {
    const extraActions: ResultAction<GroupSearchResultContext>[] = [];
    if (params.context.isEntryPoint) {
      extraActions.push(
        new CallbackResultAction(AppIcons.Dashboard, context => {
          UrlUtils.openApp(AudakoApp.Dashboard, context.tenantId, context.groupId);
        }),
      );
    }

    super({
      title: params.title,
      icon: params.icon,
      infoText: params.infoText,
      tooltip: params.tooltip ?? buildDefaultTooltip(params.title),
      context: params.context,
      extraActions,
    });
  }

  protected override serializeContext(
    context: GroupSearchResultContext,
  ): SerializedGroupSearchResultContext {
    return {
      contextType: GROUP_CONTEXT_TYPE,
      ...context,
    };
  }

  protected onDefaultAction(context: GroupSearchResultContext): void {
    UrlUtils.openApp(AudakoApp.Configuration, context.tenantId, context.groupId);
  }
}

export interface GenericEntitySearchResultContext {
  app: AudakoApp;
  tenantId: string;
  groupId?: string;
  detailId?: string;
  detailType?: EntityType;
}

interface SerializedGenericEntitySearchResultContext extends GenericEntitySearchResultContext {
  contextType: typeof GENERIC_ENTITY_CONTEXT_TYPE;
}

export class GenericEntitySearchResult extends SearchResult<GenericEntitySearchResultContext> {
  public readonly type: SearchResultType = 'generic-entity';
  public readonly category: SearchCategory;

  constructor(params: {
    category: SearchCategory;
    title: string;
    icon: string;
    infoText?: string;
    tooltip?: () => Promise<string>;
    context: GenericEntitySearchResultContext;
  }) {
    super({
      title: params.title,
      icon: params.icon,
      infoText: params.infoText,
      tooltip: params.tooltip ?? buildDefaultTooltip(params.title),
      context: params.context,
      extraActions: [],
    });
    this.category = params.category;
  }

  protected override serializeContext(
    context: GenericEntitySearchResultContext,
  ): SerializedGenericEntitySearchResultContext {
    return {
      contextType: GENERIC_ENTITY_CONTEXT_TYPE,
      ...context,
    };
  }

  protected onDefaultAction(context: GenericEntitySearchResultContext): void {
    UrlUtils.openApp(
      context.app,
      context.tenantId,
      context.groupId,
      context.detailId,
      context.detailType,
    );
  }
}

export interface SignalSearchResultContext {
  tenantId: string;
  groupId?: string;
  signalId: string;
}

interface SerializedSignalSearchResultContext extends SignalSearchResultContext {
  contextType: typeof SIGNAL_CONTEXT_TYPE;
}

export class SignalSearchResult extends SearchResult<SignalSearchResultContext> {
  public readonly type: SearchResultType = 'signal';
  public readonly category: SearchCategory = EntityType.Signal;

  constructor(params: {
    title: string;
    icon: string;
    infoText?: string;
    tooltip?: () => Promise<string>;
    context: SignalSearchResultContext;
    infoComponent?: SearchResultInfoComponent;
  }) {
    super({
      title: params.title,
      icon: params.icon,
      infoText: params.infoText,
      tooltip: params.tooltip ?? buildDefaultTooltip(params.title),
      context: params.context,
      extraActions: [],
      infoComponent: params.infoComponent,
    });
  }

  protected override serializeContext(
    context: SignalSearchResultContext,
  ): SerializedSignalSearchResultContext {
    return {
      contextType: SIGNAL_CONTEXT_TYPE,
      ...context,
    };
  }

  protected onDefaultAction(context: SignalSearchResultContext): void {
    UrlUtils.openApp(AudakoApp.Configuration, context.tenantId, context.groupId, context.signalId);
  }
}

const hasContextType = (value: unknown, contextType: SearchResultContextType): boolean => {
  if (!value || typeof value !== 'object') {
    return false;
  }
  return (value as { contextType?: string }).contextType === contextType;
};

const stripContextType = <TContext extends { contextType: SearchResultContextType }>(
  context: TContext,
): Omit<TContext, 'contextType'> => {
  const { contextType: _contextType, ...payload } = context;
  return payload;
};

const deserializeContext = <TContext extends Record<string, any>>(
  value: unknown,
  expectedContextType: SearchResultContextType,
): TContext | null => {
  if (!hasContextType(value, expectedContextType)) {
    return null;
  }

  return stripContextType(
    value as { contextType: SearchResultContextType } & TContext,
  ) as unknown as TContext;
};

export const isStoredSearchResult = (value: unknown): value is StoredSearchResult => {
  const result = value as StoredSearchResult;
  return (
    !!result &&
    typeof result === 'object' &&
    typeof result.type === 'string' &&
    typeof result.category === 'string' &&
    typeof result.title === 'string' &&
    typeof result.icon === 'string' &&
    typeof result.selectedAt === 'number' &&
    'context' in result &&
    !!result.context &&
    typeof result.context === 'object'
  );
};

export const materializeStoredSearchResult = (
  storedResult: StoredSearchResult,
): SearchResult | null => {
  switch (storedResult.type) {
    case 'tenant': {
      const context = deserializeContext<TenantSearchResultContext>(
        storedResult.context,
        TENANT_CONTEXT_TYPE,
      );
      if (!context) {
        return null;
      }

      return new TenantSearchResult({
        title: storedResult.title,
        icon: storedResult.icon,
        infoText: storedResult.infoText,
        context,
      });
    }
    case 'group': {
      const context = deserializeContext<GroupSearchResultContext>(
        storedResult.context,
        GROUP_CONTEXT_TYPE,
      );
      if (!context) {
        return null;
      }

      return new GroupSearchResult({
        title: storedResult.title,
        icon: storedResult.icon,
        infoText: storedResult.infoText,
        context,
      });
    }
    case 'generic-entity': {
      const context = deserializeContext<GenericEntitySearchResultContext>(
        storedResult.context,
        GENERIC_ENTITY_CONTEXT_TYPE,
      );
      if (!context) {
        return null;
      }

      return new GenericEntitySearchResult({
        category: storedResult.category,
        title: storedResult.title,
        icon: storedResult.icon,
        infoText: storedResult.infoText,
        context,
      });
    }
    case 'signal': {
      const context = deserializeContext<SignalSearchResultContext>(
        storedResult.context,
        SIGNAL_CONTEXT_TYPE,
      );
      if (!context) {
        return null;
      }

      return new SignalSearchResult({
        title: storedResult.title,
        icon: storedResult.icon,
        infoText: storedResult.infoText,
        context,
      });
    }
    default:
      return null;
  }
};

export const buildStoredSearchResultCacheKey = (result: StoredSearchResult): string => {
  return [
    result.type,
    result.category,
    result.title,
    result.infoText ?? '',
    JSON.stringify(result.context ?? null),
  ].join('||');
};
