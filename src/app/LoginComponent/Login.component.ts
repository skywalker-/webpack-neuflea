import { Component } from '@angular/core';
import { NeuDbService } from '../NeuDbService/neuDb.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { LoginSharedService } from './LoginSharedService/LoginShared.service';

@Component({
    selector: `nf-login`,
    templateUrl: `./login.html`
})
export class LoginComponent {
    userName: string = "";
    passWord: string = "";
    noteText: boolean = false;

    constructor(private neuDb: NeuDbService, private loginService: LoginSharedService) { }

    toggleNote() {
        this.noteText = !this.noteText;
    }

    login() {
        let userLoginDetail = { user: this.userName, pass: this.passWord };
        this.neuDb.loginProvider(userLoginDetail).subscribe(data => {
            //  console.log("login "+data);
            this.loginService.loggedInUser.next(data);
        });
    }
}