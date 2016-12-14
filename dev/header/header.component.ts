import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

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
  player_id: string = 'anonymous';
  routeLeaderboard: boolean = false;
  routeProfile: boolean = false;
  routePevex: boolean = false;
  routeTasks: boolean = false;
  avatar = 'https://api.playlyfe.com/v2/runtime/assets/players/l572fa6bd89add22900e1a889?access_token=MGQ2MDg1MjUtZTZkZC00ZTRiLTljYTMtMmE2OWExMWI4YzAw';

  constructor(private _playlyfeService: PlaylyfeService, private _router: Router) {}

  ngOnInit():any {

    this.a_token = localStorage.getItem('access_token');

    this._playlyfeService.getPlayerProfile(this.a_token)
      .subscribe(
        data => {

          this.player_profile_json = data;

          this.player_name = data.alias;
          this.player_id = data.id;
          for (let row in data.scores) {
            if(data.scores[row].metric.type == 'point' && data.scores[row].metric.name == 'mrx') {
              this.player_points = data.scores[row].value;
            }
          }

        },
        error => {
          this._router.navigate(['LoginPage']);
        },
        () => console.log(JSON.stringify(this.player_profile_json))
      );

      var route = /app|pevex|tasks|profile/.exec(window.location.href);

      if("" + route == 'app') { this.routeLeaderboard = true; }
      else if ("" + route == 'pevex') { this.routePevex = true; }
      else if ("" + route == 'profile') { this.routeProfile = true; }
      else if ("" + route == 'tasks') { this.routeTasks = true; }

      console.log(this.a_token);
  }

}
