import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Product } from "../products/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + 'products')
  }
}
