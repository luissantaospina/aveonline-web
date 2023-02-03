import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../client";
import {RoleService} from "../../role/role.service";
import {Role} from "../../role/role";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private roleService: RoleService
  ) { }

  createClientForm!: FormGroup
  roles: Array<Role> = []
  roleSelect: string = ''

  ngOnInit(): void {
    this.getRolesList()
    this.createClientForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
  }

  changeRole() {
    this.createClientForm.patchValue({
      rol_id: this.roleSelect
    });
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles
    })
  }

  createClient(client: Client) {
    this.clientService.createClient(client).subscribe(client => {
      this.createClientForm.reset()
      this.openSnackBar('Cliente creado exitosamente')
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
