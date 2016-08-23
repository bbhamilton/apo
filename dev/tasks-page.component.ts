import { Component, OnInit } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';

import { PlaylyfeService } from './playlyfe.service';


@Component({
    directives: [HeaderComponent, TasksComponent],
    template: `
      <header-component></header-component>
      <tasks></tasks>
    `,
    providers: [PlaylyfeService]
})

export class TasksPageComponent implements OnInit {

  a_token;

    constructor(private _playlyfeService: PlaylyfeService) {

    }

    ngOnInit():any {
      this.a_token = localStorage.getItem('access_token');

    }

}
