import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { HeaderComponent } from './header/header.component';
import { PevexPageComponent } from './pevex-page.component';
import { MainPageComponent } from './main-page.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
    selector: 'apocalypternet',
    directives: [ HeaderComponent, ROUTER_DIRECTIVES],
    template: `
        <header-component></header-component>
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
  { path: '/', name: 'MainPage', component: MainPageComponent, useAsDefault: true },
  { path: '/pevex', name: 'PevexPage', component: PevexPageComponent },
  { path: '/tasks', name: 'Tasks', component: TasksComponent },
  { path: '/profile', name: 'Profile', component: ProfileComponent }
])

export class AppComponent {

}
