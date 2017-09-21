import { Component, OnInit, OnChanges } from '@angular/core';
import { NeuDbService } from '../NeuDbService/neuDb.service';
import { BuyComponentSharedService } from '../BuyComponent/BuyComponentSharedService/buy-component-shared.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
    selector: `nf-filters`,
    templateUrl: './filterOptions.html'
})

export class FilterOptionsComponent implements OnInit {
    checkedValue: string;
    category: string;
    categoryList: Array<string> = [];
    brandList: Array<string> = [];
    error = { errorDiv: false, result: "", returnedValue: "" };
    constructor(private neuDbService: NeuDbService, private buySharedService: BuyComponentSharedService) { }

    selectedValue(cat: string) {
        // this.checkedValue = cat;
        this.category = cat;
        this.buySharedService.sendCategory(this.category);
    }

    showError() {
        this.error.errorDiv = !this.error.errorDiv;
    }

    ngOnInit() {
        this.neuDbService.getCategory()
            .subscribe(checkedCategories => {
                if (checkedCategories.length == 0) {
                    this.showError();
                    this.error.result = "Error: 404";
                    this.error.returnedValue = "No data found for filters, try after sometime !";
                } else {
                    let catLen = checkedCategories.length;
                    for (let i = 0; i < catLen; i++) {
                        this.categoryList[i] = checkedCategories[i].Category;
                        let branLen = checkedCategories[i].Brands.length;
                        for (let j = 0; j < branLen; j++) {
                            if (this.brandList.indexOf(checkedCategories[i].Brands[j].Name) > -1) {
                                '';
                            } else {
                                this.brandList.push(checkedCategories[i].Brands[j].Name);
                            }
                        }
                    }
                }
            });
    }
}