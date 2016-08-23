import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class PlaylyfeService {
  public name: string;
  public players_counter: number;

  constructor (private _http: Http) {
    this.name = 'apocalypternet';
  }

// --- getters

  getGameName():string {
    return null;
  }

  getPlayerName():string {
    return null;
  }

  getPlayerPoints():number {
    return 0;
  }

  getGeneralPoints():number {
    return 0;
  }

  getPlayersCounter():number {
    return this.players_counter;
  }

  getAllActions(access_token) {
    if (access_token == null ) {
      return null;
    } else {
      return this._http.get('https://api.playlyfe.com/v2/runtime/actions?access_token=' + access_token).map(res => res.json());
    }
  }

  getPlayerProfile(access_token) {
    if (access_token == null ) {
      return null;
    } else {
      return this._http.get('https://api.playlyfe.com/v2/runtime/player?access_token=' + access_token).map(res => res.json());
    }
  }

  getPlayers(access_token) {
    if (access_token == null ) {
      return null;
    } else {
      return this._http.get('https://api.playlyfe.com/v2/runtime/leaderboards/general_ranking?cycle=alltime&limit=100&access_token=' + access_token).map(res => res.json());
    }
  }

  postPlayAction(access_token, action_id) {
    if (access_token == null ) {
      return null;
    } else {
      let body = JSON.stringify({});
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log('access_token: ' + access_token);
      return this._http.post('https://api.playlyfe.com/v2/runtime/actions/' + action_id + '/play?access_token=' + access_token + '&player_id=bartek&count=1', body, options).map(res => res.json());
    }

  }

// --- setters

  setName(name) {
    this.name = name;
  }

  setPlayersCounter(players_counter) {
    this.players_counter = players_counter;
  }

}
