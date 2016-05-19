import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  selector: 'header-component',
  templateUrl: 'app/header/header.component.html',
})

export class HeaderComponent {

}
