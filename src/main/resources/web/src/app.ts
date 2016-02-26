import {bootstrap} from 'angular2/platform/browser';
import {NbWebApp} from './app/nb-web';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(NbWebApp, [
  ROUTER_PROVIDERS
]);
