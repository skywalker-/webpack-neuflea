import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { IProducts } from '../../ProductComponent/products';
import { NeuDbService } from '../../NeuDbService/neuDb.service';
import { BuyComponentSharedService } from '../../BuyComponent/BuyComponentSharedService/buy-component-shared.service';
import * as _ from 'lodash';

@Pipe({
    name: `filterProduct`,
})

export class FilterProductPipe implements PipeTransform {
    checkedCategory: Array<string> = [];
    // _masterProducts: IProducts[] = [];
    constructor(private neuDbService: NeuDbService, private buySharedService: BuyComponentSharedService) { }

    transform(value: IProducts[], filterBy: string): IProducts[] {
        this.buySharedService.getCategory().subscribe(checkedCategories => {
            this.checkedCategory = checkedCategories;
        });
        // console.log(this.checkedCategory);
        // return ;
        if (this.checkedCategory.length > 0) {
            return _.filter(value, (product) => _.includes(this.checkedCategory, product.category) || _.includes(this.checkedCategory, product.brand));
        }
        return value;
        // return value.filter((product: IProducts) => {
        //     if(this.checkedCategory.length==0){
        //         return product;
        //     }
        //     // for (let i = 0; i <= this.checkedCategory.length; i++) {
        //     //     // if (this.checkedCategory[i] == product.category || this.checkedCategory[i] == product.brand) {
        //     //     //     return product;
        //     //     // }

        //     // }
        //     return null;
        // });
    }
}