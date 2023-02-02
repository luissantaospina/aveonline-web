import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import {UserComponent} from "./user/user.component";
import {RoleComponent} from "./role/role.component";
import {ProductComponent} from "./product/product.component";
import {ClientComponent} from "./client/client.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";

const routes: Routes = [
  {path: '', component: HomeComponent , children: [
      { path: 'usuarios', component: UserComponent},
      { path: 'roles', component: RoleComponent},
      { path: 'clientes', component: ClientComponent},
      { path: 'productos', component: ProductComponent},
      { path: 'usuarios/crear', component: CreateProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
