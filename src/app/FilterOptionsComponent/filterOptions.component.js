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
var buy_component_shared_service_1 = require("../BuyComponent/BuyComponentSharedService/buy-component-shared.service");
var FilterOptionsComponent = (function () {
    function FilterOptionsComponent(neuDbService, buySharedService) {
        this.neuDbService = neuDbService;
        this.buySharedService = buySharedService;
        this.categoryList = [];
        this.brandList = [];
        this.error = { errorDiv: false, result: "", returnedValue: "" };
    }
    FilterOptionsComponent.prototype.selectedValue = function (cat) {
        // this.checkedValue = cat;
        this.category = cat;
        this.buySharedService.sendCategory(this.category);
    };
    FilterOptionsComponent.prototype.showError = function () {
        this.error.errorDiv = !this.error.errorDiv;
    };
    FilterOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neuDbService.getCategory()
            .subscribe(function (checkedCategories) {
            if (checkedCategories.length == 0) {
                _this.showError();
                _this.error.result = "Error: 404";
                _this.error.returnedValue = "No data found for filters, try after sometime !";
            }
            else {
                var catLen = checkedCategories.length;
                for (var i = 0; i < catLen; i++) {
                    _this.categoryList[i] = checkedCategories[i].Category;
                    var branLen = checkedCategories[i].Brands.length;
                    for (var j = 0; j < branLen; j++) {
                        if (_this.brandList.indexOf(checkedCategories[i].Brands[j].Name) > -1) {
                            '';
                        }
                        else {
                            _this.brandList.push(checkedCategories[i].Brands[j].Name);
                        }
                    }
                }
            }
        });
    };
    FilterOptionsComponent = __decorate([
        core_1.Component({
            selector: "nf-filters",
            templateUrl: 'app/FilterOptionsComponent/filterOptions.html'
        }),
        __metadata("design:paramtypes", [neuDb_service_1.NeuDbService, buy_component_shared_service_1.BuyComponentSharedService])
    ], FilterOptionsComponent);
    return FilterOptionsComponent;
}());
exports.FilterOptionsComponent = FilterOptionsComponent;
//# sourceMappingURL=filterOptions.component.js.map