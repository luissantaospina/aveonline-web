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
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CreateProductComponent } from './product/create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateRolComponent } from './role/create-rol/create-rol.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    RoleComponent,
    UserComponent,
    ClientComponent,
    CreateProductComponent,
    CreateUserComponent,
    CreateClientComponent,
    CreateRolComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
