import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './user/product/product.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { CartComponent } from './user/cart/cart.component';
import { UserComponent } from './user/user/user.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/login/signin.component';
import { AdminproductEditComponent } from './admin/adminproduct-edit/adminproduct-edit.component';
import { ProductListResolverService } from './user/product/product-list-resolver.service';
import { CartResolverService } from './user/cart/cart-resolver.service';
import { UserResolverService } from './user/user/user-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomepageComponent } from './user/homepage/homepage.component';

import { UserCanDeactivateGuardService } from './user/user-info/user-can-deactivate-guard.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthGuardAdmin } from './shared/auth-guard.admin.service';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component:HomepageComponent},
  { path:'product',
    component:ProductComponent,
    resolve: { products:ProductListResolverService } },
  { path:'detail/:productId', component:ProductDetailsComponent },
  { path:'cart',
    component:CartComponent,
    resolve: { items : CartResolverService},
    canActivate:[AuthGuard] },
  { path:'edit/:userid',
    component:EditUserComponent,
    canActivate:[AuthGuard]},
  { path:'profile',
   component:UserComponent,
   resolve: { userinfos: UserResolverService},
   canActivate:[AuthGuard] },
  { path:'new-user',
    component:UserInfoComponent,
    canDeactivate: [UserCanDeactivateGuardService],
    canActivate:[AuthGuard]
 },
  { path:'admin', component:AdminComponent },
  { path:'login', component:LoginComponent },
  { path:'signin', component:SigninComponent },
  { path:'product-edit/:productId', component:AdminproductEditComponent },
  { path:'notfound', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
