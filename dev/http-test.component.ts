import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, Router } from '@angular/router-deprecated';

import { HttpTestService } from './http-test.service';

@Component({
    selector: 'http-test',
    template: `
      <p><b>params: </b> {{params}}</p>
      <a href="https://playlyfe.com/auth?response_type=token&client_id=MmJmNThhYzctZGVlYi00MDI4LWEzOGUtYTYzZTNhYWZlMTg0&redirect_uri=http://localhost:3000/">Playlyfe</a>
      <button (click)="onGetGameProfileImage()">get Playlye game profile image</button>
      <pre><u>Output:</u> {{JSONdata}}</pre>
    `,
    providers: [ HttpTestService ]
})
//
// @RouteConfig([
//    {path: '/', name: 'Main', component: HttpTestComponent},
//    {path: '/:token', name: 'Token', component: HttpTestComponent}
// ])

export class HttpTestComponent {
  JSONdata: string = '...';
  params: string = 'none'

  constructor(private _httpService: HttpTestService) {

  }

  onGetGameProfileImage() {
    this._httpService.getPlaylyfeGameImage()
      .subscribe(
        data => this.JSONdata = JSON.stringify(data),
        error => console.error(error),
        () => console.log('finished')
      );
  }

/*  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => { this.getData = JSON.stringify(data); console.log('success!!'); },
        error => console.log(error),
        () => console.log('GET::finished')
      );
  }

  onTestPost() {
    this._httpService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => console.log(error),
        () => console.log("POST::finished")
      );
  }
*/

}
