import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";
import {Role} from "../../role/role";
import {RoleService} from "../../role/role.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private roleService: RoleService
  ) { }

  createUserForm!: FormGroup
  roles: Array<Role> = []
  roleSelect: string = ''

  ngOnInit(): void {
    this.getRolesList()
    this.createUserForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
  }

  changeRole() {
    this.createUserForm.patchValue({
      rol_id: this.roleSelect
    });
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles
    })
  }

  createProduct(user: User) {
    this.userService.createUser(user).subscribe(product => {
      this.createUserForm.reset()
      this.openSnackBar('Usuario creado exitosamente')
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
