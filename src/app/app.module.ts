import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component'
import {UserRoutingModule} from "./user/user-routing.module";
import { RoleComponent } from './role/role.component';
import {RoleRoutingModule} from "./role/role-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    RoleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
