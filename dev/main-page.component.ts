import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LevelComponent } from './level/level.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@Component({
    directives: [LevelComponent, LeaderboardComponent, ROUTER_DIRECTIVES],
    template: `
      <level></level>
      <leaderboard></leaderboard>
    `
})

export class MainPageComponent  {

}
