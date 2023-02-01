import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import {UserComponent} from "../home/user/user.component";
import {RoleComponent} from "../home/role/role.component";
import {ProductComponent} from "../home/product/product.component";
import {ClientComponent} from "../home/client/client.component";

const routes: Routes = [
  {path: '', component: HomeComponent , children: [
      { path: 'usuarios', component: UserComponent},
      { path: 'roles', component: RoleComponent},
      { path: 'clientes', component: ClientComponent},
      { path: 'productos', component: ProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
