import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserlistComponent } from './userlist/userlist.component';
import { Userhome1Component } from './userhome1/userhome1.component';
import { Adminhome1Component } from './adminhome1/adminhome1.component';
import { GetAllItemsComponent } from './allmenuitems/allmenuitems.component';
import { UpdatemenuitemComponent } from './updatemenuitem/updatemenuitem.component';
import { DeletemenuitemComponent } from './deletemenuitem/deletemenuitem.component';
import { AddmenuitemsComponent } from './addmenuitems/addmenuitems.component';
import { MenuItemsListForUserComponent } from './menu-items-list-for-user/menu-items-list-for-user.component';
import { CartlistforuserComponent } from './cartlistforuser/cartlistforuser.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { CartServiceService } from './cartservice.service';
import { CartlistComponent } from './cartlist/cartlist.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';

const routes: Routes = [{ path: '', component:WelcomepageComponent},
{ path: 'welcomepage', component:WelcomepageComponent},
{path: 'adminsignup',component:RegisterComponent},
{path: 'signIn',component:SigninComponent},
{path:'userList',component:UserlistComponent},
{path:'aboutUs',component:AboutusComponent},
{path:'adminHome1',component:Adminhome1Component},
{path:'adminHome1/:userId',component:Adminhome1Component},
{path:'userHome1/:userId',component:Userhome1Component},
{path:'updateMenuItem/:item_id',component:UpdatemenuitemComponent},
{path:'getAllMenuItems',component:GetAllItemsComponent},
{path:'deleteMenuItem',component:DeletemenuitemComponent},
{path:'addMenuItems',component:AddmenuitemsComponent},
{path:'menuItemListForUser',component:MenuItemsListForUserComponent},
{path:'menuItemsListForUser/:userId',component:MenuItemsListForUserComponent},
{path:'updateMenuItem',component:UpdatemenuitemComponent},
{path:'cartListForUserComponent/:item_id/:userId',component:CartlistforuserComponent},
{path:'paymentForUserComponent/:cart_id/:user_id',component:OrdercomponentComponent},
{path:'cartList',component:CartlistComponent},
{path:'allmenuitems',component:GetAllItemsComponent},
{path:'paymentList',component:PaymentlistComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
