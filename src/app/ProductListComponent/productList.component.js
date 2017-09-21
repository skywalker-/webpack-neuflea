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
var neuDb_service_1 = require("../NeuDbService/neuDb.service");
var pager_service_1 = require("../PagerService/pager.service");
var buy_component_shared_service_1 = require("../BuyComponent/BuyComponentSharedService/buy-component-shared.service");
// import * as _ from 'underscore';
var ProductListComponent = (function () {
    // pager:Object;
    function ProductListComponent(neuDbService, buySharedService, pagerService) {
        var _this = this;
        this.neuDbService = neuDbService;
        this.buySharedService = buySharedService;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
        this.slaveProducts = [];
        this.error = { errorDiv: false, result: "", returnedValue: "" };
        this.bgColor = 'red';
        this.sub = this.buySharedService.getCategory().subscribe(function (text) {
            _this.checked = text.length;
        });
    }
    ProductListComponent.prototype.changeStyle = function ($event) {
        this.bgColor = $event.type == 'mouseover' ? 'yellow' : 'red';
    };
    ProductListComponent.prototype.showError = function () {
        this.error.errorDiv = !this.error.errorDiv;
        this.error.result = "Error: 404";
        this.error.returnedValue = "No Products found";
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neuDbService.getProducts().subscribe(function (product) {
            if (product.length !== 0) {
                _this.slaveProducts = product;
                _this.setPage(1);
            }
            else {
                _this.showError();
            }
        });
        // this.pagerService.getPager(this.slaveProducts.length, 1, 6)
        //     .subscribe( data => console.log(data));
    };
    ProductListComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.slaveProducts.length, page, 6);
        // get current page of items
        this.pagedItems = this.slaveProducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: "nf-productList",
            templateUrl: 'app/ProductListComponent/productList.html'
        }),
        __metadata("design:paramtypes", [neuDb_service_1.NeuDbService, buy_component_shared_service_1.BuyComponentSharedService, pager_service_1.PagerService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=productList.component.js.map