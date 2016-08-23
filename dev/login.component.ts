import { Component, OnInit } from '@angular/core';
import { PlaylyfeService } from './playlyfe.service';
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'login',
    template: `
      <div class="playlyfe_loginpage">
        <div class="playlyfe_container">
          <img class="apocalypternet_logo" src="src/images/logo.png" alt="Apocalypternet logo">
          <a class="playlyfe_btn" href="https://playlyfe.com/auth?response_type=token&client_id={{client_id}}&redirect_uri={{redirect_uri}}">
            <p class="playlyfe_btn__label" >Log in with playlyfe</p>
          </a>
        </div>
      </div>
    `,
    providers: [ PlaylyfeService ]
})

export class LoginComponent {
  a_token: string = null;
  playlyfe_id: string;
  // production env
  client_id = 'MTI4OTkxNWQtNDMzMi00NDQwLWE2OWEtYmY3ZGVhYmNkYmMz';
  // testing env
  // client_id = 'MmJmNThhYzctZGVlYi00MDI4LWEzOGUtYTYzZTNhYWZlMTg0';
  redirect_uri = 'http://localhost:3000/';

  constructor(private _httpService: PlaylyfeService) {

  }

}
