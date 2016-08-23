import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, RouteParams, Router } from '@angular/router-deprecated';

import { LoginComponent } from './login.component';
import { PevexPageComponent } from './pevex-page.component';
import { MainPageComponent } from './main-page.component';
import { TasksPageComponent } from './tasks-page.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
    selector: 'apocalypternet',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ LoginComponent, ROUTER_DIRECTIVES ]
})

@RouteConfig([
  { path: '/', name: 'LoginPage', component: LoginComponent, useAsDefault: true },
  { path: '/app/:access_token', name: 'MainPage', component: MainPageComponent },
  { path: '/pevex', name: 'PevexPage', component: PevexPageComponent },
  { path: '/tasks', name: 'TasksPage', component: TasksPageComponent },
  { path: '/profile', name: 'Profile', component: ProfileComponent },
])

export class AppComponent implements OnInit {
  private a_token: string;

  constructor (private _router: Router) {}

  ngOnInit():any {
    var atoken = /\=[A-Za-z0-9]+/.exec(window.location.href);
    if(atoken != null) {
      this.a_token = atoken[0].slice(1);
      localStorage.setItem('access_token', this.a_token);
      this._router.navigate(['MainPage', {access_token: this.a_token}]);
    }
  }

}
