import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../AppComponent/app.component';
import { HeaderComponent } from '../HeaderComponent/header.component';
import { BuyComponent } from '../BuyComponent/buy.component';
import { NeuDbService } from '../NeuDbService/neuDb.service';
import { SellComponent } from '../SellComponent/sell.component';
import { ProductDetailsComponent } from '../ProductDetailsComponent/product-details.component';
import { PageNotFoundComponent } from '../PageNotFoundComponent/page-not-found.component';
import { FilterOptionsComponent } from '../FilterOptionsComponent/filterOptions.component';
import { ProductListComponent } from '../ProductListComponent/productList.component';
import { BuyComponentSharedService } from '../BuyComponent/BuyComponentSharedService/buy-component-shared.service';
import { SellFormComponent } from '../SellComponent/SellFormComponent/SellForm.component';
import { FilterProductPipe } from '../ProductListComponent/FilterProductPipe/FilterProduct.pipe';
import { LoginComponent } from '../LoginComponent/Login.component';
import { SignUpComponent } from '../LoginComponent/SignUpComponent/signUp.component';
import { LoginSharedService } from '../LoginComponent/LoginSharedService/LoginShared.service';
import { PagerService } from '../PagerService/pager.service';

const appRoutes: Routes = [
  { path: 'sell', component: SellComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', component: BuyComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BuyComponent,
    SellComponent,
    ProductDetailsComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent,
    FilterOptionsComponent,
    ProductListComponent,
    SellFormComponent,
    FilterProductPipe
  ],
  bootstrap: [AppComponent],
  providers: [NeuDbService,
    LoginSharedService,
    BuyComponentSharedService,
    PagerService
  ]
})
export class AppModule { }
