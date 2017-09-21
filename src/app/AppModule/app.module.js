"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("../AppComponent/app.component");
var header_component_1 = require("../HeaderComponent/header.component");
var buy_component_1 = require("../BuyComponent/buy.component");
var neuDb_service_1 = require("../NeuDbService/neuDb.service");
var sell_component_1 = require("../SellComponent/sell.component");
var product_details_component_1 = require("../ProductDetailsComponent/product-details.component");
var page_not_found_component_1 = require("../PageNotFoundComponent/page-not-found.component");
var filterOptions_component_1 = require("../FilterOptionsComponent/filterOptions.component");
var productList_component_1 = require("../ProductListComponent/productList.component");
var buy_component_shared_service_1 = require("../BuyComponent/BuyComponentSharedService/buy-component-shared.service");
var SellForm_component_1 = require("../SellComponent/SellFormComponent/SellForm.component");
var FilterProduct_pipe_1 = require("../ProductListComponent/FilterProductPipe/FilterProduct.pipe");
var Login_component_1 = require("../LoginComponent/Login.component");
var signUp_component_1 = require("../LoginComponent/SignUpComponent/signUp.component");
var LoginShared_service_1 = require("../LoginComponent/LoginSharedService/LoginShared.service");
var pager_service_1 = require("../PagerService/pager.service");
var appRoutes = [
    { path: 'sell', component: sell_component_1.SellComponent },
    { path: 'product/:id', component: product_details_component_1.ProductDetailsComponent },
    { path: '', component: buy_component_1.BuyComponent },
    { path: 'buy', component: buy_component_1.BuyComponent },
    { path: 'login', component: Login_component_1.LoginComponent },
    { path: 'register', component: signUp_component_1.SignUpComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                buy_component_1.BuyComponent,
                sell_component_1.SellComponent,
                product_details_component_1.ProductDetailsComponent,
                Login_component_1.LoginComponent,
                signUp_component_1.SignUpComponent,
                page_not_found_component_1.PageNotFoundComponent,
                filterOptions_component_1.FilterOptionsComponent,
                productList_component_1.ProductListComponent,
                SellForm_component_1.SellFormComponent,
                FilterProduct_pipe_1.FilterProductPipe
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [neuDb_service_1.NeuDbService,
                LoginShared_service_1.LoginSharedService,
                buy_component_shared_service_1.BuyComponentSharedService,
                pager_service_1.PagerService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map