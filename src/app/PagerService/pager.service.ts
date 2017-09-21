import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class PagerService {
    returnObject:any;
    getPager(totalProducts: number, currentPage: number = 1, productsPerPage: number = 6): Observable<any> {
        // calculate total pages
        let totalPages = Math.ceil(totalProducts / productsPerPage);

        let startPage: number, endPage: number;

        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * productsPerPage;
        let endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        
        // setTimeout(() =>{
        //     return returnObject;
        // },50)
        this.returnObject = {
            totalItems: totalProducts,
            currentPage: currentPage,
            pageSize: productsPerPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        }
        return this.returnObject;
        
    }
}