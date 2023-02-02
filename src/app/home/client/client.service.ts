import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "./client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  deleteClient(id: string): Observable<Client> {
    return this.http.delete<Client>(this.apiUrl + 'client/' + id)
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + 'clients')
  }
}
