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
var buy_component_shared_service_1 = require("../../BuyComponent/BuyComponentSharedService/buy-component-shared.service");
var _ = require("lodash");
var FilterProductPipe = (function () {
    // _masterProducts: IProducts[] = [];
    function FilterProductPipe(neuDbService, buySharedService) {
        this.neuDbService = neuDbService;
        this.buySharedService = buySharedService;
        this.checkedCategory = [];
    }
    FilterProductPipe.prototype.transform = function (value, filterBy) {
        var _this = this;
        this.buySharedService.getCategory().subscribe(function (checkedCategories) {
            _this.checkedCategory = checkedCategories;
        });
        // console.log(this.checkedCategory);
        // return ;
        if (this.checkedCategory.length > 0) {
            return _.filter(value, function (product) { return _.includes(_this.checkedCategory, product.category) || _.includes(_this.checkedCategory, product.brand); });
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
    };
    FilterProductPipe = __decorate([
        core_1.Pipe({
            name: "filterProduct",
        }),
        __metadata("design:paramtypes", [neuDb_service_1.NeuDbService, buy_component_shared_service_1.BuyComponentSharedService])
    ], FilterProductPipe);
    return FilterProductPipe;
}());
exports.FilterProductPipe = FilterProductPipe;
//# sourceMappingURL=FilterProduct.pipe.js.map