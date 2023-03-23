import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [
{
  path:'',component:HomeComponent
},

{
  path:'s-auth',component:SellerAuthComponent
},

{
  path:'addproduct',component:AddproductComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
