import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'apocalypternet',
    directives: [ HeaderComponent ],
    template: `
        <header-component></header-component>
        <h1>Apocalypternet</h1>
        <p>Hello World!</p>
    `
})
export class AppComponent {

}
