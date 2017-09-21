"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalProducts, currentPage, productsPerPage) {
        if (currentPage === void 0) { currentPage = 1; }
        if (productsPerPage === void 0) { productsPerPage = 6; }
        // calculate total pages
        var totalPages = Math.ceil(totalProducts / productsPerPage);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * productsPerPage;
        var endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);
        // return object with all pager properties required by the view
        // setTimeout(() =>{
        //     return returnObject;
        // },50)
        this.returnObject = {
            totalItems: totalProducts,
            currentPage: currentPage,
            pageSize: productsPerPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
        return this.returnObject;
    };
    PagerService = __decorate([
        core_1.Injectable()
    ], PagerService);
    return PagerService;
}());
exports.PagerService = PagerService;
//# sourceMappingURL=pager.service.js.map