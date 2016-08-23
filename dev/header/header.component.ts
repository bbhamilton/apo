import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PlaylyfeService } from './../playlyfe.service';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  selector: 'header-component',
  templateUrl: 'app/header/header.component.html',
  providers: [PlaylyfeService]
})

export class HeaderComponent implements OnInit {
  a_token: string;
  player_points: string = "0";
  player_profile_json;
  player_name: string = 'anonymous';
  routeLeaderboard: boolean = false;
  routeProfile: boolean = false;
  routePevex: boolean = false;
  routeTasks: boolean = false;

  constructor(private _playlyfeService: PlaylyfeService) {}

  ngOnInit():any {
    this.a_token = localStorage.getItem('access_token');

    this._playlyfeService.getPlayerProfile(this.a_token)
      .subscribe(
        data => {

          this.player_profile_json = data;

          this.player_name = data.alias;
          for (let row in data.scores) {
            if(data.scores[row].metric.type == 'point' && data.scores[row].metric.name == 'mrx') {
              this.player_points = data.scores[row].value;
            }
          }


        },
        error => console.error(error),
        () => console.log(JSON.stringify(this.player_profile_json))
      );

      var route = /app|pevex|tasks|profile/.exec(window.location.href);

      if("" + route == 'app') { this.routeLeaderboard = true; }
      else if ("" + route == 'pevex') { this.routePevex = true; }
      else if ("" + route == 'profile') { this.routeProfile = true; }
      else if ("" + route == 'tasks') { this.routeTasks = true; }

  }

}
