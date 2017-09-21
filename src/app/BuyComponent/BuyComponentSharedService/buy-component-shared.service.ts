import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BuyComponentSharedService {
    checkedCategory: Array<string> = [];
    // temp:Observable<Array<string>>;
    private subject = new Subject<any>();

    sendCategory(category: string) {
        if (this.checkedCategory.indexOf(category) !== -1) {
            this.checkedCategory.splice(this.checkedCategory.indexOf(category), 1);
        } else {
            this.checkedCategory.push(category);
        }
        this.subject.next(this.checkedCategory);
    }

    getCategory(): Observable<any> {
        return this.subject.asObservable();
    }
}