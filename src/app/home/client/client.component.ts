import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import {Client} from "./client";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) { }

  client: Client | undefined
  displayedColumns: string[] = ['name', 'role', 'actions'];

  clients: Array<Client> = []

  deleteClient(clientId: string): void {
    this.clientService.deleteClient(clientId).subscribe(client => {
      this.client = client
    })
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
}
