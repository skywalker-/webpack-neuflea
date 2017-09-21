import { enableProdMode } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../HeaderComponent/header.component';

@Component({
    selector: 'nf-app',
    template: `<nf-header></nf-header><router-outlet></router-outlet>`,
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    pageTitle = 'Neu Flea Market';
// tslint:disable-next-line:eofline
}