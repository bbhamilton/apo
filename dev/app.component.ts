import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, RouteParams, Router } from '@angular/router-deprecated';

import { LoginComponent } from './login.component';
import { PevexPageComponent } from './pevex-page.component';
import { MainPageComponent } from './main-page.component';
import { TasksPageComponent } from './tasks-page.component';
import { ProfilePageComponent } from './profile-page.component';

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
  { path: '/profile', name: 'ProfilePage', component: ProfilePageComponent }
])

export class AppComponent implements OnInit {
  private a_token: string;

  constructor (private _router: Router) {}

  ngOnInit():any {
    var atoken = /\=[A-Za-z0-9]+/.exec(window.location.href);
    console.log('warunki::begin');

    if(atoken != null) {
      this.a_token = atoken[0].slice(1);
      localStorage.setItem('access_token', this.a_token);
      this._router.navigate(['MainPage', {access_token: this.a_token}]);
      console.log('warunki::warunek 1 ' + this.a_token );
    } else if (localStorage.getItem('access_token') !== null) {
      this.a_token = localStorage.getItem('access_token');
      console.log('warunki::warunek 2 ' + this.a_token);
      this._router.navigate(['MainPage', {access_token: this.a_token}]);
    } else {
      console.log('warunki::warunek 3');
      this._router.navigate(['LoginPage']);
    }
  }

}
