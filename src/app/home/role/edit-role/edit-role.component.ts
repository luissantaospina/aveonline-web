import { Component, OnInit } from '@angular/core';
import {RoleService} from "../role.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Role} from "../role";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  constructor(
    private roleService: RoleService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute
  ) { }

  role: any

  updateRoleForm!: FormGroup

  ngOnInit(): void {
    this.updateRoleForm = this.formBuilder.group({
      nombre: ["", Validators.required]
    })
    this.role = this.route.snapshot.params
  }

  updateProduct(role: Role) {
    this.roleService.updateRole(this.role.id, role).subscribe(role => {
      this.updateRoleForm.reset()
      this.openSnackBar('Rol editado exitosamente')
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

