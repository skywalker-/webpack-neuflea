import { Component, OnInit, OnChanges } from '@angular/core';
import { NeuDbService } from '../NeuDbService/neuDb.service';
import { PagerService } from '../PagerService/pager.service';
import { BuyComponentSharedService } from '../BuyComponent/BuyComponentSharedService/buy-component-shared.service';
import { IProducts } from '../ProductComponent/products';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';
// import * as _ from 'underscore';

@Component({
    selector: `nf-productList`,
    templateUrl: './productList.html'
})

export class ProductListComponent implements OnInit {
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    slaveProducts: IProducts[] = [];
    checked: number;
    sub: Subscription;
    error = { errorDiv: false, result: "", returnedValue: "" };
    // pager:Object;
    constructor(private neuDbService: NeuDbService,
        private buySharedService: BuyComponentSharedService,
        private pagerService: PagerService) {
        this.sub = this.buySharedService.getCategory().subscribe(text => {
            this.checked = text.length;
        });
    }

    bgColor: string = 'red';

    changeStyle($event) {
        this.bgColor = $event.type === 'mouseover' ? 'yellow' : 'red';
    }

    showError() {
        this.error.errorDiv = !this.error.errorDiv;
        this.error.result = "Error: 404";
        this.error.returnedValue = "No Products found";
    }


    ngOnInit() {
        this.neuDbService.getProducts().subscribe(product => {
            if (product.length !== 0) {
                this.slaveProducts = product;
                this.setPage(1);
            } else {
                this.showError();
            }
        });
        // this.pagerService.getPager(this.slaveProducts.length, 1, 6)
        //     .subscribe( data => console.log(data));
    }



    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.slaveProducts.length, page, 6);

        // get current page of items
        this.pagedItems = this.slaveProducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}