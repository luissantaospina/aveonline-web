import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Role } from "./role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl + 'roles')
  }
}
