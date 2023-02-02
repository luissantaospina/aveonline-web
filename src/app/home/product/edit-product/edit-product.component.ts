import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../Product";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute
  ) { }

  product: any

  updateProductForm!: FormGroup

  ngOnInit(): void {
    this.updateProductForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      cantidad: ["", Validators.required],
      categoria: ["", Validators.required],
      codigo: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: ["", Validators.required]
    })
    this.product = this.route.snapshot.params
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(this.product.id, product).subscribe(product => {
      this.updateProductForm.reset()
      this.openSnackBar('Producto editado exitosamente')
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
