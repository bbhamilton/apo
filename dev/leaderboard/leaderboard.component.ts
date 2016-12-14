import { Component, Input, OnInit } from '@angular/core';
import { PlaylyfeService } from './../playlyfe.service';

@Component({
  selector: 'leaderboard',
  templateUrl: 'app/leaderboard/leaderboard.component.html',
  providers: [PlaylyfeService]
})

export class LeaderboardComponent implements OnInit {
  a_token: string;
  JSONdata;

  constructor(private _playlyfeService: PlaylyfeService) {


  }

  ngOnInit():any {

    this.a_token = localStorage.getItem('access_token');

    this._playlyfeService.getPlayers(this.a_token)
    .subscribe(
      data => this.JSONdata = data,
      error => console.error(error),
      () => console.dir(this.JSONdata)
    );

  }

}
