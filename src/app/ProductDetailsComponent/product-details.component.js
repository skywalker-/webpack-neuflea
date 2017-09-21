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
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(neuDbService) {
        this.neuDbService = neuDbService;
        this.product = [];
        this.error = { errorDiv: false, result: "", returnedValue: "" };
        this.buyConfirmation = { confirm: false, ask: "Are You sure?", instruction: "Click Yes to BUY or CANCEL to reject this process" };
    }
    ProductDetailsComponent.prototype.confirmation = function () {
        this.buyConfirmation.confirm = !this.buyConfirmation.confirm;
    };
    ProductDetailsComponent.prototype.showError = function () {
        this.error.errorDiv = !this.error.errorDiv;
        this.error.result = "Error: 404";
        this.error.returnedValue = "Whether product ID is wrong or product doesn't exists !";
    };
    ProductDetailsComponent.prototype.changeValues = function () {
        this.productStatus = true;
        this.imgUrl = "../images/sold.jpg";
    };
    ProductDetailsComponent.prototype.buyProduct = function () {
        var _this = this;
        this.neuDbService.updateProductStatus(this.product[0]).subscribe(function (data) {
            if (data.toString() != "Sold") {
                _this.changeValues();
            }
            _this.confirmation();
        });
    };
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var arr = window.location.pathname.split('/');
        var id = arr[2];
        this.neuDbService.getProductWithID(id)
            .subscribe(function (product) {
            if (product.length == 0) {
                _this.showError();
            }
            else {
                _this.product = product;
                console.log(_this.product[0].status.toString());
                if (_this.product[0].status == 'Available') {
                    _this.productStatus = false;
                    _this.imgUrl = '../images/available.jpg';
                }
                else {
                    _this.changeValues();
                }
            }
        });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: "product-details",
            templateUrl: "app/ProductDetailsComponent/product-details.html"
        }),
        __metadata("design:paramtypes", [neuDb_service_1.NeuDbService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map