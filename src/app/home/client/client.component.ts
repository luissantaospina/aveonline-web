import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import {Client} from "./client";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(private userService: ClientService) { }

  clients: Array<Client> = []

  getClientsList(): void {
    this.userService.getClients().subscribe(clients => {
      this.clients = clients
    })
  }

  ngOnInit(): void {
    this.getClientsList()
  }
}
