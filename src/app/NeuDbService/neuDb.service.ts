import { Injectable } from '@angular/core';
import { ICategory } from '../CategoryInterface/category';
import { IProducts } from '../ProductComponent/products';
import { IUser } from '../UserComponent/UserInterface';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class NeuDbService {
    constructor(private _http: Http) { }
    private _baseUrl:string = "http://localhost:3030";
    _product = new Subject<any>();
    private handleError(error: Response) {
        console.log("I got an error for you");
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    getCategory(): Observable<ICategory[]> {
        return this._http.get(this._baseUrl+'/sell')
                    .map(res => res.json())
                    .catch(this.handleError);
    }
    
    getProducts(): Observable<IProducts[]>{
        return this._http.get(this._baseUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    getProductWithID(ID:any): Observable<IProducts[]> {
        return this._http.get(this._baseUrl+'/product/'+ID)
                    .map((response: Response) => <IProducts[]> response.json())
                    .catch(this.handleError);
    }

    updateProductStatus(product:Object){
        return this._http.post(this._baseUrl+`/statusChange`, product)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    getProductWithCategory(category:string): Observable<IProducts[]>{
        return this._http.get(this._baseUrl+`/cat=${category}`)
                    .map((response: Response) => <IProducts[]> response.json())
                    .catch(this.handleError);
    }

    getUsers():Observable<IUser[]>{
        return this._http.get(this._baseUrl+'/users')
                    .map((res:Response) => <IUser[]> res.json())
                    .catch(this.handleError);
    }

    addNewCategory(cat:string, brand:string, model:string): Observable<any>{
        console.log("inside addNewCateogry");
        let catBrandModel = {Cat:cat, Brand:brand, Model:model};
        // let head = new Headers();
        return this._http.post(this._baseUrl+'/addCat',catBrandModel)
                    .map(res => res.json())
                    .catch(this.handleError);
        }
    
    addNewProduct(newProduct:IProducts):Observable<IProducts[]>{
        let product = {"date":newProduct.date,"title":newProduct.title, "category":newProduct.category, "brand":newProduct.brand, "model":newProduct.model, "price":newProduct.price, "description":newProduct.description, "address":newProduct.address, "state":newProduct.state, "url":newProduct.URL,"status":newProduct.status};
        return this._http.post(this._baseUrl+'/addProduct',product)
                    .map(res => res.json())
                    .catch(this.handleError);
        }

    addNewUser(user:Object): Observable<any>{
        console.log("inside addNewUser");
        return this._http.post(this._baseUrl+'/addUser',user)
                    .map(res => res.json())
                    .catch(this.handleError);
        }
    
    isUsernameValid(username:string):Observable<string>{
        return this._http.post(this._baseUrl+`/user=${username}`, username)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    isEmailValid(email:string):Observable<string>{
        return this._http.post(this._baseUrl+`/mail=${email}`,email)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    loginProvider(userDetails:Object): Observable<any>{
        return this._http.post(this._baseUrl+'/login', userDetails)
                    .map(res => res.json())
                    .catch(this.handleError);
    }
}