import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../client";
import {ActivatedRoute} from '@angular/router'

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
    private route:ActivatedRoute
  ) { }

  updateClientForm!: FormGroup

  client: any

  ngOnInit(): void {
    this.updateClientForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      rol_id: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
    this.client = this.route.snapshot.params
  }

  updateClient(client: Client) {
    this.clientService.updateClient(this.client.id, client).subscribe(client => {
      this.updateClientForm.reset()
      this.openSnackBar('Cliente editado exitosamente')
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
