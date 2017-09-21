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
var SignUpComponent = (function () {
    // newUser = {fullName:'',email:''};
    function SignUpComponent(neuDbService) {
        this.neuDbService = neuDbService;
        this.existingUsersUsername = [];
        this.existingUsersEmail = [];
        this.resultValues = { errorSignUp: false, result: "", returnedValue: "", emailExists: false, usernameExists: false };
        this.confirmRegistration = false;
        this.newUser = { _id: 1, fullName: '', username: '', email: '', passOne: '', passTwo: '', mobile: '' };
    }
    SignUpComponent.prototype.confirm = function () {
        this.confirmRegistration = !this.confirmRegistration;
    };
    SignUpComponent.prototype.showResult = function () {
        this.confirm();
        this.resultValues.errorSignUp = !this.resultValues.errorSignUp;
        // window.location.reload();
    };
    SignUpComponent.prototype.verifyUsernameIsUnique = function (uName) {
        var _this = this;
        this.neuDbService.isUsernameValid(uName).subscribe(function (data) {
            console.log(data);
            if (data.length > 0) {
                _this.resultValues.usernameExists = false;
            }
            else {
                _this.resultValues.usernameExists = true;
            }
        });
    };
    SignUpComponent.prototype.verifyEmailIsUnique = function (email) {
        var _this = this;
        this.neuDbService.isEmailValid(email).subscribe(function (dataReturned) {
            console.log(dataReturned);
            if (dataReturned.length > 0) {
                _this.resultValues.emailExists = false;
            }
            else {
                _this.resultValues.emailExists = true;
            }
        });
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        console.log(this.newUser);
        this.neuDbService.addNewUser(this.newUser)
            .subscribe(function (data) {
            _this.resultValues.errorSignUp = !_this.resultValues.errorSignUp;
            if (data == 1) {
                _this.resultValues.result = "Successful";
                _this.resultValues.returnedValue = "Successfully Signed Up";
                _this.confirm();
            }
            else {
                _this.resultValues.result = "Error";
                _this.resultValues.returnedValue = "Error occurred while Signing Up";
            }
        });
    };
    SignUpComponent.prototype.ngOnInit = function () {
        // this.neuDbService.getUsers()
        //         .subscribe(Users => {
        //             let usersLen = Users.length;
        //             for(let j=0; j < usersLen; j++){
        //                 this.existingUsersUsername.push(Users[j].username);
        //                 this.existingUsersEmail.push(Users[j].email);
        //             }
        //         });
        // setTimeout(() =>{
        //     console.log(this.existingUsersUsername+" "+this.existingUsersEmail);
        // },700);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'nf-signup',
            templateUrl: 'app/LoginComponent/SignUpComponent/signUp.html'
        }),
        __metadata("design:paramtypes", [neuDb_service_1.NeuDbService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signUp.component.js.map