import { Injectable } from '@angular/core';
import { LoginInterfase }  from '../models/login.interfase'
import { ResponseInterfase }  from '../models/response.interfase'
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  login(form:LoginInterfase): Observable<ResponseInterfase> {
    let direction = this.apiUrl + 'users'
    return this.http.post<ResponseInterfase>(direction, form)
  }
}
