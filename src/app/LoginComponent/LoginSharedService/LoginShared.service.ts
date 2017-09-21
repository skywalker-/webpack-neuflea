import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginSharedService{
    loggedInUser = new Subject<any>();
    // private subject = new Subject<any>();

    // sendLoggedUser(user:Object){}

    getLoggedUser(): Observable<any>{
        // console.log("inside loginSharedService");
        return this.loggedInUser.asObservable();
    }
}