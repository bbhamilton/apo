import { Component, OnInit, Input } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeaderComponent } from './header/header.component';
import { LevelComponent } from './level/level.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@Component({
    directives: [HeaderComponent, LevelComponent, LeaderboardComponent],
    template: `
      <header-component></header-component>
      <level></level>
      <leaderboard></leaderboard>
    `
})

export class MainPageComponent implements OnInit {
  a_token: string = null;

  constructor(private _routeParams: RouteParams) {}

  ngOnInit():any {
    this.a_token = this._routeParams.get('access_token');
  }

}
