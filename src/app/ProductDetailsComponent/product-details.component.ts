import { Component, OnInit } from "@angular/core";
import { NeuDbService } from '../NeuDbService/neuDb.service';
import { IProducts } from '../ProductComponent/products';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.html'
})


export class ProductDetailsComponent {
    product: IProducts[] = [];
    productStatus: boolean;
    imgUrl: string;
    subs: Subscription;
    error = { errorDiv: false, result: '', returnedValue: '' };
    buyConfirmation = { confirm: false, ask: 'Are You sure?', instruction: 'Click Yes to BUY or CANCEL to reject this process' };
    constructor(private neuDbService: NeuDbService) { }

    confirmation() {
        this.buyConfirmation.confirm = !this.buyConfirmation.confirm;
    }

    showError() {
        this.error.errorDiv = !this.error.errorDiv;
        this.error.result = 'Error: 404';
        this.error.returnedValue = `Whether product ID is wrong or product doesn't exists !`;
    }

    changeValues() {
        this.productStatus = true;
        this.imgUrl = '../../assets/images/sold.jpg';
    }

    buyProduct() {
        this.neuDbService.updateProductStatus(this.product[0]).subscribe(data => {
            if (data.toString() !== 'Sold') {
                this.changeValues();
            }
            this.confirmation();
        });
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        const arr = window.location.pathname.split('/');
        const id = arr[2];
        this.neuDbService.getProductWithID(id)
            .subscribe(product => {
                if (product.length === 0) {
                    this.showError();
                } else {
                    this.product = product;
                    console.log(this.product[0].status.toString())
                    if (this.product[0].status === 'Available') {
                        this.productStatus = false;
                        this.imgUrl = '../../assets/images/available.jpg';
                    } else {
                        this.changeValues();
                    }
                }
            });
    }
}