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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var NeuDbService = (function () {
    function NeuDbService(_http) {
        this._http = _http;
        this._baseUrl = "http://localhost:3030";
        this._product = new Subject_1.Subject();
    }
    NeuDbService.prototype.handleError = function (error) {
        console.log("I got an error for you");
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    NeuDbService.prototype.getCategory = function () {
        return this._http.get(this._baseUrl + '/sell')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.getProducts = function () {
        return this._http.get(this._baseUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.getProductWithID = function (ID) {
        return this._http.get(this._baseUrl + '/product/' + ID)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.updateProductStatus = function (product) {
        return this._http.post(this._baseUrl + "/statusChange", product)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.getProductWithCategory = function (category) {
        return this._http.get(this._baseUrl + ("/cat=" + category))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.getUsers = function () {
        return this._http.get(this._baseUrl + '/users')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.addNewCategory = function (cat, brand, model) {
        console.log("inside addNewCateogry");
        var catBrandModel = { Cat: cat, Brand: brand, Model: model };
        // let head = new Headers();
        return this._http.post(this._baseUrl + '/addCat', catBrandModel)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.addNewProduct = function (newProduct) {
        var product = { "date": newProduct.date, "title": newProduct.title, "category": newProduct.category, "brand": newProduct.brand, "model": newProduct.model, "price": newProduct.price, "description": newProduct.description, "address": newProduct.address, "state": newProduct.state, "url": newProduct.URL, "status": newProduct.status };
        return this._http.post(this._baseUrl + '/addProduct', product)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.addNewUser = function (user) {
        console.log("inside addNewUser");
        return this._http.post(this._baseUrl + '/addUser', user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.isUsernameValid = function (username) {
        return this._http.post(this._baseUrl + ("/user=" + username), username)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.isEmailValid = function (email) {
        return this._http.post(this._baseUrl + ("/mail=" + email), email)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService.prototype.loginProvider = function (userDetails) {
        return this._http.post(this._baseUrl + '/login', userDetails)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NeuDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NeuDbService);
    return NeuDbService;
}());
exports.NeuDbService = NeuDbService;
//# sourceMappingURL=neuDb.service.js.map