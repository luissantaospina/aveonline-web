import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";
import {ActivatedRoute, Router} from '@angular/router'
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
    private roleService: RoleService,
    private router:Router
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
      email: ["", Validators.required],
      password: ["", Validators.required]
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
        email: [this.userSave.email, Validators.required],
        password: ["", Validators.required]
      })
    })
  }

  updateProduct(user: User) {
    this.userService.updateUser(this.user.id, user).subscribe(() => {
      this.updateUserForm.reset()
      this.openSnackBar('Usuario editado exitosamente')
      this.router.navigate(['inicio/usuarios'])
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
