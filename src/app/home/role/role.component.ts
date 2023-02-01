import { Component, OnInit } from '@angular/core';
import {RoleService} from "./role.service";
import {Role} from "./role";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  constructor(private roleService: RoleService) { }

  roles: Array<Role> = []

  getRolesList(): void {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles
    })
  }

  ngOnInit(): void {
    this.getRolesList()
  }
}
