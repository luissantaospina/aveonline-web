import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";
import {ActivatedRoute} from '@angular/router'
import {Role} from "../../role/role";
import {RoleService} from "../../role/role.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private roleService: RoleService
  ) { }

  user: any
  userSave: any
  roles: Array<Role> = []
  roleSelect: string = ''
  updateUserForm!: FormGroup

  ngOnInit(): void {
    this.getRolesList()
    this.user = this.route.snapshot.params
    this.getUser(this.user.id)
    this.updateUserForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
  }

  changeRole() {
    this.updateUserForm.patchValue({
      rol_id: this.roleSelect
    });
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles
    })
  }

  getUser(id: string): void {
    this.userService.getUser(id).subscribe(user => {
      this.userSave = user
      this.roleSelect = this.userSave.role.id
      this.updateUserForm = this.formBuilder.group({
        nombre: [this.userSave.nombre, Validators.required],
        rol_id: [this.userSave.role.id, Validators.required],
        login: [this.userSave.login, Validators.required],
        clave: ["", Validators.required]
      })
    })
  }

  updateProduct(user: User) {
    this.userService.updateUser(this.user.id, user).subscribe(product => {
      this.updateUserForm.reset()
      this.openSnackBar('Usuario editado exitosamente')
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 6000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
