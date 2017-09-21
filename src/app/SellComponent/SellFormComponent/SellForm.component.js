"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var neuDb_service_1 = require("../../NeuDbService/neuDb.service");
var SellFormComponent = (function () {
    function SellFormComponent(neuDbService) {
        this.neuDbService = neuDbService;
        this.products = [];
        this.category = [];
        this.brands = [];
        this.models = [];
        this.addCategoryDiv = false;
        this.errorCategoryDiv = false;
        this.result = "";
        this.returnedValue = "";
        this.d = new Date();
        this.newCatBrandModel = { category: "", brand: "", model: "" };
        this.newProduct = { _id: 1, date: "", title: "", category: "default", brand: "default", model: "default", price: "", description: "", address: "", state: "", URL: "", status: "Available" };
        this.received = { category: false, brand: false, model: false };
    }
    SellFormComponent.prototype.getBrands = function (catSelected) {
        this.brands = [];
        var len = this.products.length;
        for (var i = 0; i < len; i++) {
            if (this.products[i].Category == catSelected) {
                var len1 = this.products[i].Brands.length;
                for (var j = 0; j < len1; j++) {
                    this.brands[j] = this.products[i].Brands[j].Name;
                }
            }
        }
        // this.brands = _.filter(this.products,(product) => _.includes(catSelected,product.Category));
        // console.log(this.brands);
    };
    SellFormComponent.prototype.getModels = function (catSelected, brandSelected) {
        // console.log("cat: "+catSelected+" brand: "+brandSelected);
        this.models = [];
        var len = this.products.length;
        for (var i = 0; i < len; i++) {
            if (this.products[i].Category == catSelected) {
                var len1 = this.products[i].Brands.length;
                for (var j = 0; j < len1; j++) {
                    // this.brands[j] = this.products[i].Brands[j].Name;
                    if (this.products[i].Brands[j].Name == brandSelected) {
                        var len2 = this.products[i].Brands[j].Models.length;
                        for (var k = 0; k < len2; k++) {
                            this.models[k] = this.products[i].Brands[j].Models[k].Name;
                        }
                    }
                }
            }
        }
    };
    SellFormComponent.prototype.validateValue = function (str, value) {
        console.log(str + " " + value);
        if (str == "cat") {
            if (value == "default") {
                this.newProduct.brand = "default";
                this.received.category = true;
            }
            else
                this.received.category = false;
        }
        else if (str == "brand") {
            if (value == "default") {
                this.newProduct.model = "default";
                this.received.brand = true;
            }
            else
                this.received.brand = false;
        }
        else if (str == "model") {
            if (value == "default")
                this.received.model = true;
            else
                this.received.model = false;
        }
    };
    SellFormComponent.prototype.show = function () {
        this.addCategoryDiv = !this.addCategoryDiv;
    };
    SellFormComponent.prototype.showResult = function () {
        // this.addCategoryDiv = false;
        this.errorCategoryDiv = !this.errorCategoryDiv;
    };
    SellFormComponent.prototype.saveCategory = function () {
        var _this = this;
        console.log("inside saveCategory");
        this.neuDbService.addNewCategory(this.newCatBrandModel.category.toUpperCase(), this.newCatBrandModel.brand.toUpperCase(), this.newCatBrandModel.model.toUpperCase())
            .subscribe(function (data) {
            console.log(data + typeof (data));
            if (data > -1) {
                _this.errorCategoryDiv = !_this.errorCategoryDiv;
                _this.result = "Successful";
                if (data == 0) {
                    _this.returnedValue = "Added All Details";
                }
                else if (data == 1) {
                    _this.returnedValue = "Added New Brand '" + _this.newCatBrandModel.brand.toUpperCase() + "' and New Model '" + _this.newCatBrandModel.model.toUpperCase() + "' under " + _this.newCatBrandModel.category.toUpperCase() + " Category";
                }
                else if (data == 2) {
                    _this.returnedValue = "Added New Model '" + _this.newCatBrandModel.model.toUpperCase() + "' under " + _this.newCatBrandModel.category.toUpperCase() + " Category and " + _this.newCatBrandModel.brand.toUpperCase() + " Brand";
                }
                else if (data == 3) {
                    _this.returnedValue = "All the given details already exists";
                }
            }
            else {
                _this.errorCategoryDiv = !_this.errorCategoryDiv;
                _this.result = "Error";
                _this.returnedValue = "Error while submitting details, Please retry !!";
            }
        });
        setTimeout(function () {
            window.location.reload(true);
        }, 3000);
    };
    SellFormComponent.prototype.submitProduct = function () {
        var _this = this;
        var Date = this.d.toLocaleString();
        this.newProduct.date = Date;
        this.newProduct.status = "Available";
        console.log(this.newProduct);
        this.neuDbService.addNewProduct(this.newProduct).subscribe(function (data) {
            if (data.length > 0) {
                _this.errorCategoryDiv = !_this.errorCategoryDiv;
                _this.result = "Successful";
                _this.returnedValue = "Product Added";
            }
        });
    };
    SellFormComponent.prototype.ngOnChanges = function () {
        // this.saveCategory();
        this.submitProduct();
    };
    SellFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neuDbService.getCategory()
            .subscribe(function (categories) {
            _this.products = categories;
            var len = _this.products.length;
            for (var i = 0; i < len; i++) {
                _this.category[i] = _this.products[i].Category;
            }
        });
    };
    SellFormComponent = __decorate([
        core_1.Component({
            selector: "sell-form",
            templateUrl: 'app/SellComponent/SellFormComponent/sellForm.html'
        }),
        __metadata("design:paramtypes", [neuDb_service_1.NeuDbService])
    ], SellFormComponent);
    return SellFormComponent;
}());
exports.SellFormComponent = SellFormComponent;
//# sourceMappingURL=SellForm.component.js.map