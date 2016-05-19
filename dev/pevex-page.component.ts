import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PevexComponent } from './pevex/pevex.component';
import { ProductsComponent } from './products/products.component';


@Component({
    directives: [PevexComponent, ProductsComponent, ROUTER_DIRECTIVES],
    template: `
      <pevex></pevex>
      <products></products>
    `
})

export class PevexPageComponent  {

}
