import { Component, OnInit } from '@angular/core';
import {RoleService} from "./role.service";
import {Role} from "./role";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  constructor(
    private roleService: RoleService,
    private _snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['name', 'actions'];

  role: Role | undefined

  roles: Array<Role> = []

  deleteRole(roleId: string): void {
    this.roleService.deleteRole(roleId).subscribe(role => {
      this.openSnackBar('Rol eliminado exitosamente')
      this.getRolesList()
    })
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles
    })
  }

  ngOnInit(): void {
    this.getRolesList()
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
