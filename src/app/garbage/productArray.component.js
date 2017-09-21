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
var neuDb_service_1 = require("./neuDb.service");
var buy_component_shared_service_1 = require("./buy-component-shared.service");
var ProductArrayComponent = (function () {
    function ProductArrayComponent(neuDbService, buySharedService) {
        this.neuDbService = neuDbService;
        this.buySharedService = buySharedService;
        this._masterProducts = [];
        this._slaveProducts = [];
        this.sub = this.buySharedService.getCategory().subscribe(function (text) {
            console.log(text);
        });
        //         this.sub = buySharedService.missionAnnounced$.subscribe(
        //   mission => {
        //     console.log(mission);
        // });
        // console.log(this.checked);
    }
    // updateValue(cat:Observable<string>){
    //     // this.checked = this.buySharedService.selectedCategory;
    //     console.log(cat);
    //     // if(this.checkedCategoryDict[])
    // }
    ProductArrayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neuDbService.getProducts()
            .subscribe(function (product) {
            _this._slaveProducts = product;
            _this._masterProducts = product;
            // console.log(product);
        });
        // console.log(this.buySharedService.selectedCategory+" "+this.checked);
    };
    ProductArrayComponent.prototype.ngOnChanges = function () {
        // this.updateValue();
        // this.sub = this.buySharedService.getCategory().subscribe(category => {this.checked = category;});
        console.log(this.checked);
    };
    return ProductArrayComponent;
}());
ProductArrayComponent = __decorate([
    core_1.Component({
        selector: "nf-productArray",
        templateUrl: './productArray.html'
    }),
    __metadata("design:paramtypes", [neuDb_service_1.NeuDbService, buy_component_shared_service_1.BuyComponentSharedService])
], ProductArrayComponent);
exports.ProductArrayComponent = ProductArrayComponent;
//# sourceMappingURL=productArray.component.js.map