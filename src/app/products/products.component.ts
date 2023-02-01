import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {ProductsService} from "../dashboard/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  products: Array<Product> = []

  getPorductsList(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  ngOnInit(): void {
    this.getPorductsList()
  }
}
