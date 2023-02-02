import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  createUserForm!: FormGroup

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
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
        duration: 6000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
