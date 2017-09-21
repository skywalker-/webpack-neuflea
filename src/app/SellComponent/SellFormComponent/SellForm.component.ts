import { Component, OnChanges, OnInit } from '@angular/core';
import { NeuDbService } from '../../NeuDbService/neuDb.service';
import { ICategory } from '../../CategoryInterface/category';
import * as _ from 'lodash';

@Component({
    selector: `sell-form`,
    templateUrl: './sellForm.html'
})

export class SellFormComponent implements OnInit, OnChanges {
    products: ICategory[] = [];
    category: Array<any> = [];
    brands: Array<any> = [];
    models: Array<any> = [];
    addCategoryDiv: boolean = false;
    errorCategoryDiv:boolean = false;
    result:string ="";
    returnedValue:string ="";
    d: Object = new Date();
    newCatBrandModel= {category:"",brand:"",model:""};
    newProduct= {_id:1,date:"",title:"",category:"default",brand:"default",model:"default",price:"",description:"",address:"",state:"",URL:"",status:"Available"};
    received = {category:false,brand:false,model:false};
    constructor(private neuDbService: NeuDbService) { }


    getBrands(catSelected: string) {
        this.brands = [];
        let len = this.products.length;
        for (let i = 0; i < len; i++) {
            if (this.products[i].Category == catSelected) {
                let len1 = this.products[i].Brands.length;
                for (let j = 0; j < len1; j++) {
                    this.brands[j] = this.products[i].Brands[j].Name;
                }
            }
        }
        // this.brands = _.filter(this.products,(product) => _.includes(catSelected,product.Category));
        // console.log(this.brands);
    }

    getModels(catSelected: string, brandSelected: string) {
        // console.log("cat: "+catSelected+" brand: "+brandSelected);
        this.models = [];
        let len = this.products.length;
        for (let i = 0; i < len; i++) {
            if (this.products[i].Category == catSelected) {
                let len1 = this.products[i].Brands.length;
                for (let j = 0; j < len1; j++) {
                    // this.brands[j] = this.products[i].Brands[j].Name;
                    if (this.products[i].Brands[j].Name == brandSelected) {
                        let len2 = this.products[i].Brands[j].Models.length;
                        for (let k = 0; k < len2; k++) {
                            this.models[k] = this.products[i].Brands[j].Models[k].Name;
                        }
                    }
                }
            }
        }
    }

    validateValue(str:string,value:string){
        console.log(str+" "+value);
        if(str == "cat"){
            if(value == "default"){
                this.newProduct.brand = "default";
                this.received.category = true;
            }
            else 
                this.received.category = false;
        } else if(str == "brand"){
            if(value == "default"){
                this.newProduct.model = "default";
                this.received.brand = true;
            }
            else 
                this.received.brand = false;
        } else if(str == "model"){
            if(value == "default")
                this.received.model = true;
            else 
                this.received.model = false;
        }
    }

    show() {
        this.addCategoryDiv = !this.addCategoryDiv;
    }

    showResult(){
        // this.addCategoryDiv = false;
        this.errorCategoryDiv = !this.errorCategoryDiv;
    }

    saveCategory() {
        console.log("inside saveCategory");
            this.neuDbService.addNewCategory(this.newCatBrandModel.category.toUpperCase(),this.newCatBrandModel.brand.toUpperCase(),this.newCatBrandModel.model.toUpperCase())
                            .subscribe(data => {
                                console.log(data+ typeof(data));
                                if(data > -1){
                                    this.errorCategoryDiv = !this.errorCategoryDiv;
                                    this.result = "Successful";
                                    if(data == 0){
                                        this.returnedValue = "Added All Details";
                                    } else if(data == 1){
                                        this.returnedValue = `Added New Brand '${this.newCatBrandModel.brand.toUpperCase()}' and New Model '${this.newCatBrandModel.model.toUpperCase()}' under ${this.newCatBrandModel.category.toUpperCase()} Category`;
                                    } else if(data == 2){
                                        this.returnedValue = `Added New Model '${this.newCatBrandModel.model.toUpperCase()}' under ${this.newCatBrandModel.category.toUpperCase()} Category and ${this.newCatBrandModel.brand.toUpperCase()} Brand`;
                                    } else if(data == 3){
                                        this.returnedValue = "All the given details already exists";
                                    }
                                } else {
                                    this.errorCategoryDiv = !this.errorCategoryDiv;
                                    this.result = "Error";
                                    this.returnedValue = "Error while submitting details, Please retry !!";
                                }
                            });
            setTimeout(() =>{
                window.location.reload(true);
            }, 3000);
    }

    submitProduct() {
        let Date = this.d.toLocaleString();
        this.newProduct.date = Date;
        this.newProduct.status = "Available";
        console.log(this.newProduct);
        this.neuDbService.addNewProduct(this.newProduct).subscribe(data => {
            if(data.length > 0){
                this.errorCategoryDiv = !this.errorCategoryDiv;
                this.result = "Successful";
                this.returnedValue = "Product Added";
            }
        });
    }

    ngOnChanges() {
        // this.saveCategory();
        this.submitProduct();
    }

    ngOnInit() {
        this.neuDbService.getCategory()
            .subscribe(categories => {
                this.products = categories;
                let len = this.products.length;
                for (let i = 0; i < len; i++) {
                    this.category[i] = this.products[i].Category;
                }
            });

    }
}