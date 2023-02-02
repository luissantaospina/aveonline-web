import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";
import {ActivatedRoute} from '@angular/router'

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
    private route:ActivatedRoute
  ) { }

  user: any

  updateUserForm!: FormGroup

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
    this.user = this.route.snapshot.params
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
