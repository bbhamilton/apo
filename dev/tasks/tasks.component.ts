import { Component, OnInit } from '@angular/core';
import { PlaylyfeService } from './../playlyfe.service';
import { ROUTER_DIRECTIVES, RouteConfig, RouteParams, Router } from '@angular/router-deprecated';

@Component({
    selector: 'tasks',
    templateUrl: 'app/tasks/tasks.component.html',
    providers: [PlaylyfeService]
})

export class TasksComponent implements OnInit {
  a_token;
  actions_json;

  constructor(private _playlyfeService: PlaylyfeService, private _router: Router) {

  }

  ngOnInit():any {
    this.a_token = localStorage.getItem('access_token');

    this._playlyfeService.getAllActions(this.a_token)
      .subscribe(
        data => {
          this.actions_json = data
        },
        error => console.error(error),
        () => console.log(this.actions_json)
      );

  }

  playAction(event, action_id) {
    event.preventDefault();

    this._playlyfeService.postPlayAction(this.a_token, action_id)
      .subscribe(
        data => {
          console.log(JSON.stringify(data))
          this._router.navigate(['TasksPage', {}]);
        },
        error => console.error(error)
      );


  }

}
