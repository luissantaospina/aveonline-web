import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {RoleComponent} from "../role/role.component";
import {UserComponent} from "../user/user.component";
import {ClientComponent} from "../client/client.component";
import {ProductsComponent} from "../products/products.component";

const routes: Routes = [{
  path: 'dashboard',
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'usuarios',
      component: UserComponent
    },
    {
      path: 'roles',
      component: RoleComponent
    },
    {
      path: 'clientes',
      component: ClientComponent
    },
    {
      path: 'productos',
      component: ProductsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

