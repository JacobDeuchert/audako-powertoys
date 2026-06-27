import 'reflect-metadata';
import {
  BaseHttpService,
  registerCoreServices,
  setGlobalDependencyContainer,
} from 'audako-core-components';
import { container } from 'tsyringe';

let bootstrapPromise: Promise<void> | null = null;

/**
 * Registers the audako core-services DI container in the main world.
 *
 * The chat widget now lives entirely in the main world, and its template
 * support resolves services such as `UserProfileHttpService` via the global
 * dependency container. The extension world performs the same bootstrap in
 * `content.ts`; this is the main-world counterpart. The promise is memoised so
 * repeated callers (chat session bootstrap, template dialog) share one setup.
 */
export function ensureMainWorldCoreServices(): Promise<void> {
  if (!bootstrapPromise) {
    bootstrapPromise = (async () => {
      const config = await BaseHttpService.requestHttpConfig(window.location.origin);
      setGlobalDependencyContainer(container);
      registerCoreServices(config, localStorage.getItem('access_token') || '');
    })();
  }

  return bootstrapPromise;
}
