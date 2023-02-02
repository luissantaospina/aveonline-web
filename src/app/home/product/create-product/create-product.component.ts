import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ProductsService} from "../products.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../Product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  createProductForm!: FormGroup

  ngOnInit(): void {
    this.createProductForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      cantidad: ["", Validators.required],
      categoria: ["", Validators.required],
      codigo: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: ["", Validators.required]
    })
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(product => {
      this.createProductForm.reset()
      this.openSnackBar('Producto creado exitosamente')
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 6000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
