import { Component, OnInit } from '@angular/core';
import { PlaylyfeService } from './../playlyfe.service';

@Component({
    selector: 'profile',
    templateUrl: 'app/profile/profile.component.html',
    providers: [PlaylyfeService]
})

export class ProfileComponent implements OnInit {
  a_token;
  player_profile_json;
  player_name;
  player_id;
  player_scores;

  constructor(private _playlyfeService: PlaylyfeService ) {}

  ngOnInit():any {
    this.a_token = localStorage.getItem('access_token');

    this._playlyfeService.getPlayerProfile(this.a_token)
      .subscribe(
        data => {
          this.player_profile_json = data;
          this.player_name = data.alias;
          this.player_id = data.id;
          this.player_scores = data.scores;

          for(let row in data.scores) {
            if(data.scores[row].metric.id == 'badges') {
              this.player_scores = data.scores[row].value;
              console.dir(this.player_scores);
              break;
            }
          }

        },
        error => {
          this._router.navigate(['LoginPage']);
        },
        () => console.dir(this.player_profile_json)
      );

  }

}
