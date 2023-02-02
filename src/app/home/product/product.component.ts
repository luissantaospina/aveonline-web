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
  product: Product | undefined
  displayedColumns: string[] = ['code', 'name', 'category', 'price', 'actions'];

  getProductsList(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(product => {
      this.product = product
    })
    this.getProductsList()
  }

  ngOnInit(): void {
    this.getProductsList()
  }
}
