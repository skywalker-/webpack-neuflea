import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LoginSharedService } from '../LoginComponent/LoginSharedService/LoginShared.service';

@Component({
    selector: 'nf-header',
    templateUrl: `./header.html`
})

export class HeaderComponent {
    loggedInUser: any;
    sub: Subscription;
    constructor(private login: LoginSharedService) {
        this.sub = this.login.getLoggedUser().subscribe(data => {
            console.log(data);
            this.loggedInUser = data;
        });
    }

    logout() {
        this.loggedInUser = undefined;
    }
}