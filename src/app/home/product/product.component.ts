import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./products.service";
import {Product} from "./Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
