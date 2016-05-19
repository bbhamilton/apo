///<reference path="../typings/browser.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
]);
