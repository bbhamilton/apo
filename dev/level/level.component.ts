import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { PlaylyfeService } from './../playlyfe.service';

@Component({
  selector: 'level',
  templateUrl: 'app/level/level.component.html',
  providers: [PlaylyfeService]
})

export class LevelComponent implements OnInit {
  a_token: string;
  total = 0;
  current_level = 2000;
  next_level = 4000;
  players = 0;
  constructor(private _playlyfeService: PlaylyfeService) {}

  ngOnInit():any {
    this.a_token = localStorage.getItem('access_token');
    this._playlyfeService.getPlayers(this.a_token)
      .subscribe(
        data => {

          for (let row in data.data) {
            this.total += parseFloat(data.data[row].score);
            this.players++;
          }

        },
        error => console.error(error)
      );
  }


}
