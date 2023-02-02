import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import {UserComponent} from "./user/user.component";
import {RoleComponent} from "./role/role.component";
import {ProductComponent} from "./product/product.component";
import {ClientComponent} from "./client/client.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {CreateUserComponent} from "./user/create-user/create-user.component";
import {CreateClientComponent} from "./client/create-client/create-client.component";
import {CreateRolComponent} from "./role/create-rol/create-rol.component";
import {EditClientComponent} from "./client/edit-client/edit-client.component";
import {EditRoleComponent} from "./role/edit-role/edit-role.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";
import {DashboardGuard} from "../guards/dashboard.guard";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivateChild: [DashboardGuard],
    children: [
      { path: 'usuarios', component: UserComponent},
      { path: 'roles', component: RoleComponent},
      { path: 'clientes', component: ClientComponent},
      { path: 'productos', component: ProductComponent},
      { path: 'productos/crear', component: CreateProductComponent},
      { path: 'productos/editar/:id', component: EditProductComponent},
      { path: 'usuarios/crear', component: CreateUserComponent},
      { path: 'usuarios/editar/:id', component: EditUserComponent},
      { path: 'clientes/crear', component: CreateClientComponent},
      { path: 'clientes/editar/:id', component: EditClientComponent},
      { path: 'roles/crear', component: CreateRolComponent},
      { path: 'roles/editar/:id', component: EditRoleComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
