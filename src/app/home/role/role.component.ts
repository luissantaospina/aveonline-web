import { Component, OnInit } from '@angular/core';
import {RoleService} from "./role.service";
import {Role} from "./role";
import {User} from "../user/User";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  constructor(private roleService: RoleService) { }

  displayedColumns: string[] = ['name', 'actions'];

  role: Role | undefined

  roles: Array<Role> = []

  deleteRole(roleId: string): void {
    this.roleService.deleteRole(roleId).subscribe(role => {
      this.role = role
    })
    this.getRolesList()
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles
    })
  }

  ngOnInit(): void {
    this.getRolesList()
  }
}
