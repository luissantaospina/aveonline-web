import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import {Client} from "./client";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private _snackBar: MatSnackBar
  ) { }

  client: Client | undefined
  displayedColumns: string[] = ['name', 'role', 'actions'];

  clients: Array<Client> = []

  deleteClient(clientId: string): void {
    this.clientService.deleteClient(clientId).subscribe(client => {
      this.client = client
    })
    this.openSnackBar('Cliente eliminado exitosamente')
    this.getClientsList()
  }

  getClientsList(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients
    })
  }

  ngOnInit(): void {
    this.getClientsList()
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}