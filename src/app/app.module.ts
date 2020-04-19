import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { ProductComponent } from './user/product/product.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { CartComponent } from './user/cart/cart.component';
import { ProductService } from './shared/product.service';
import { CartService } from './shared/cart.service';
import { UserService } from './shared/user.service';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthGuardAdmin } from './shared/auth-guard.admin.service';
import { ClickColorDirective } from './shared/click-color.directive';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/login/signin.component';
import { FooterComponent } from './footer/footer.component';
import { AdminproductEditComponent } from './admin/adminproduct-edit/adminproduct-edit.component';
import { OrderComponent } from './user/order/order.component';

import { ProductListResolverService } from './user/product/product-list-resolver.service';
import { CartResolverService } from './user/cart/cart-resolver.service';
import { UserResolverService } from './user/user/user-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { UserCanDeactivateGuardService } from './user/user-info/user-can-deactivate-guard.service';
import { HomepageComponent } from './user/homepage/homepage.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    UserInfoComponent,
    SetproductComponent,
    UserComponent,
    AdminComponent,
    EditUserComponent,
    LoginComponent,
    FooterComponent,
    AdminproductEditComponent,
    OrderComponent,
    ClickColorDirective,
    PageNotFoundComponent,
    ConfirmEqualValidatorDirective,
    HomepageComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductService,
              ProductListResolverService,
              CartService,
              UserService,
              AuthService,
              CartResolverService,
              UserResolverService,
              UserCanDeactivateGuardService,
              AuthGuard,
              AuthGuardAdmin
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
