import { Component } from '@angular/core';
import { LevelComponent } from './level/level.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@Component({
    directives: [LevelComponent, LeaderboardComponent],
    template: `
      <level></level>
      <leaderboard></leaderboard>
    `
})

export class MainPageComponent  {

}
