import { Component, OnInit } from '@angular/core';
import { IUser } from '../../UserComponent/UserInterface';
import { NeuDbService } from '../../NeuDbService/neuDb.service';
import * as _ from 'lodash';

@Component({
    selector: 'nf-signup',
    templateUrl: './signUp.html'
})

export class SignUpComponent implements OnInit {
    existingUsersUsername: Array<any> = [];
    existingUsersEmail: Array<any> = [];
    resultValues = { errorSignUp: false, result: "", returnedValue: "", emailExists: false, usernameExists: false };
    confirmRegistration: boolean = false;
    newUser: IUser = { _id: 1, fullName: '', username: '', email: '', passOne: '', passTwo: '', mobile: '' };
    // newUser = {fullName:'',email:''};
    constructor(private neuDbService: NeuDbService) { }

    confirm() {
        this.confirmRegistration = !this.confirmRegistration;
    }

    showResult() {
        this.confirm();
        this.resultValues.errorSignUp = !this.resultValues.errorSignUp;
        // window.location.reload();
    }

    verifyUsernameIsUnique(uName: string) {
        this.neuDbService.isUsernameValid(uName).subscribe(data => {
            console.log(data);
            if (data.length > 0) {
                this.resultValues.usernameExists = false;
            } else {
                this.resultValues.usernameExists = true;
            }
        });
    }

    verifyEmailIsUnique(email: string) {
        this.neuDbService.isEmailValid(email).subscribe(dataReturned => {
            console.log(dataReturned);
            if (dataReturned.length > 0) {
                this.resultValues.emailExists = false;
            } else {
                this.resultValues.emailExists = true;
            }
        });
    }

    signUp() {
        console.log(this.newUser);
        this.neuDbService.addNewUser(this.newUser)
            .subscribe(data => {
                this.resultValues.errorSignUp = !this.resultValues.errorSignUp;
                if (data === 1) {
                    this.resultValues.result = 'Successful';
                    this.resultValues.returnedValue = 'Successfully Signed Up';
                    this.confirm();
                } else {
                    this.resultValues.result = 'Error';
                    this.resultValues.returnedValue = 'Error occurred while Signing Up';
                }
            });

    }

    ngOnInit() {
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

    }
}