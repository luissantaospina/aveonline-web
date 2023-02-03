import { Component, OnInit } from '@angular/core';
import {RoleService} from "../role.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Role} from "../role";

@Component({
  selector: 'app-create-rol',
  templateUrl: './create-rol.component.html',
  styleUrls: ['./create-rol.component.css']
})
export class CreateRolComponent implements OnInit {
  constructor(
    private roleService: RoleService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  createRoleForm!: FormGroup

  ngOnInit(): void {
    this.createRoleForm = this.formBuilder.group({
      nombre: ["", Validators.required]
    })
  }

  createProduct(role: Role) {
    this.roleService.createRole(role).subscribe(role => {
      this.createRoleForm.reset()
      this.openSnackBar('Rol creado exitosamente')
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

