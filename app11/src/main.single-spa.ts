import { ApplicationRef, enableProdMode, } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  // https://single-spa.js.org/docs/ecosystem-angular#routing-in-zone-less-applications
  bootstrapFunction: async singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    const ngModuleRef = await platformBrowserDynamic().bootstrapModule(
      AppModule,
      { ngZone: 'noop' },
    );

    const appRef = ngModuleRef.injector.get(ApplicationRef);
    const listener = () => appRef.tick();
    window.addEventListener('popstate', listener);

    ngModuleRef.onDestroy(() => {
      window.removeEventListener('popstate', listener);
    });
    return ngModuleRef;
  },
  template: '<app11-root />',
  Router,
  NavigationStart,
  NgZone: 'noop',
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
