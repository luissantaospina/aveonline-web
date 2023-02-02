import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../client";
import {ActivatedRoute} from '@angular/router'
import {Role} from "../../role/role";
import {RoleService} from "../../role/role.service";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private roleService: RoleService
  ) { }

  updateClientForm!: FormGroup

  client: any

  clientSave: any

  roles: Array<Role> = []

  roleSelect: string = ''

  ngOnInit(): void {
    this.getRolesList()
    this.client = this.route.snapshot.params
    this.getClient(this.client.id)
    this.updateClientForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
  }

  changeRole() {
    this.updateClientForm.patchValue({
      rol_id: this.roleSelect
    });
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles
    })
  }

  updateClient(client: Client) {
    this.clientService.updateClient(this.client.id, client).subscribe(client => {
      this.updateClientForm.reset()
      this.openSnackBar('Cliente editado exitosamente')
    })
  }

  getClient(id: string): void {
    this.clientService.getClient(id).subscribe(client => {
      this.clientSave = client
      this.updateClientForm = this.formBuilder.group({
        nombre: [this.clientSave.nombre, Validators.required],
        rol_id: [this.clientSave.role.id, Validators.required],
        login: [this.clientSave.login, Validators.required],
        clave: ["", Validators.required]
      })
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
