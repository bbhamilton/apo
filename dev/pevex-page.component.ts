import { Component } from '@angular/core';

import { PevexComponent } from './pevex/pevex.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';


@Component({
    directives: [HeaderComponent, PevexComponent, ProductsComponent],
    template: `
      <header-component></header-component>
      <pevex></pevex>
      <products></products>
    `
})

export class PevexPageComponent implements OnInit {

  a_token;

    constructor() {

    }

    ngOnInit():any {
      this.a_token = localStorage.getItem('access_token'));
    }

}
