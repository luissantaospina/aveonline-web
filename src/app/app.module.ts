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
import { ClientComponent } from './client/client.component';
import {ClientRoutingModule} from "./client/client-routing.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import {DashboardRoutingModule} from "./dashboard/dashboard-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    UserComponent,
    RoleComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    RoleRoutingModule,
    ClientRoutingModule,
    LoginRoutingModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
