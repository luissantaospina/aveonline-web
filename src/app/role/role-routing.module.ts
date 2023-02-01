import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from "./role.component";

const routes: Routes = [{
  path: 'roles',
  children: [
    {
      path: '',
      component: RoleComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }

