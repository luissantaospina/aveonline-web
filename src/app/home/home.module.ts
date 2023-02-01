import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { ProductComponent } from './product/product.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    RoleComponent,
    UserComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HomeModule { }
