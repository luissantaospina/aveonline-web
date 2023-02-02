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

const routes: Routes = [
  {path: '', component: HomeComponent , children: [
      { path: 'usuarios', component: UserComponent},
      { path: 'roles', component: RoleComponent},
      { path: 'clientes', component: ClientComponent},
      { path: 'productos', component: ProductComponent},
      { path: 'productos/crear', component: CreateProductComponent},
      { path: 'usuarios/crear', component: CreateUserComponent},
      { path: 'clientes/crear', component: CreateClientComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
