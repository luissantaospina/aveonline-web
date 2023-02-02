import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Role } from "./role";
import {User} from "../user/User";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  deleteRole(id: string): Observable<Role> {
    return this.http.delete<Role>(this.apiUrl + 'role/' + id)
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl + 'roles')
  }
}
