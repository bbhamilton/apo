import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';


@Component({
    directives: [HeaderComponent, ProfileComponent],
    template: `
      <header-component></header-component>
      <profile></profile>
    `
})

export class ProfilePageComponent implements OnInit {

  a_token;

    constructor() {

    }

    ngOnInit():any {
      this.a_token = localStorage.getItem('access_token');
    }

}
