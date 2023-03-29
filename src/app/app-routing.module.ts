import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

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

{
  path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]
},
{
  path:'add-pro',component:AddproductComponent,canActivate:[AuthGuard]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
