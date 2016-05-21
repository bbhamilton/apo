import { Component } from '@angular/core';
import { HttpTestComponent } from './http-test.component';

@Component({
    selector: 'apocalypternet',
    template: `
      <http-test></http-test>
    `,
    directives: [ HttpTestComponent ]
})

export class AppComponent {
}
