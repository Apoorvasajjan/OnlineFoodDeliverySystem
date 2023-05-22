import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Userhome1Component } from './userhome1/userhome1.component';
import { Adminhome1Component } from './adminhome1/adminhome1.component';
import { UpdatemenuitemComponent } from './updatemenuitem/updatemenuitem.component';
import { DeletemenuitemComponent } from './deletemenuitem/deletemenuitem.component';
import { AddmenuitemsComponent } from './addmenuitems/addmenuitems.component';
import { GetAllItemsComponent } from './allmenuitems/allmenuitems.component';
import { MenuItemsListForUserComponent } from './menu-items-list-for-user/menu-items-list-for-user.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CartlistforuserComponent } from './cartlistforuser/cartlistforuser.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    RegisterComponent,
    SigninComponent,
    UserlistComponent,
    AboutusComponent,
    Userhome1Component,
    Adminhome1Component,
    UpdatemenuitemComponent,
    DeletemenuitemComponent,
    AddmenuitemsComponent,
    GetAllItemsComponent,
    MenuItemsListForUserComponent,
    CartlistComponent,
    CartlistforuserComponent,
    OrdercomponentComponent,
    PaymentlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
