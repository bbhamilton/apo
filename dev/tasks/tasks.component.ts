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

  constructor(private _playlyfeService: PlaylyfeService, private _router: Router) {}

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

  getMetric(metrics, metric):number {
    console.log(metric);
    console.dir(metrics);
    if (typeof metrics[0] !== 'undefined' && metrics[0].metric.name == metric) {
      return metrics[0].value;
    } else if (typeof metrics[1] !== 'undefined' && metrics[1].metric.name == metric) {
      return metrics[1].value;
    } else if (typeof metrics[2] !== 'undefined' && metrics[2].metric.name == metric) {
      return metrics[2].value;
    } else {
      return 0;
    }


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
