import { Component } from '@angular/core';

import { PevexComponent } from './pevex/pevex.component';
import { ProductsComponent } from './products/products.component';


@Component({
    directives: [PevexComponent, ProductsComponent],
    template: `
      <pevex></pevex>
      <products></products>
    `
})

export class PevexPageComponent  {

}
