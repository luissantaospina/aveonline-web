import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../Product";
import {Router, ActivatedRoute} from '@angular/router'

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
    private route:ActivatedRoute,
    private router:Router
  ) { }

  product: any
  productSave: any
  updateProductForm!: FormGroup

  ngOnInit(): void {
    this.product = this.route.snapshot.params
    this.getProduct(this.product.id)
    this.updateProductForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      cantidad: ["", Validators.required],
      categoria: ["", Validators.required],
      codigo: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: ["", Validators.required]
    })
  }

  getProduct(id: string): void {
    this.productService.getProduct(id).subscribe(product => {
      this.productSave = product
      this.updateProductForm = this.formBuilder.group({
        nombre: [this.productSave.nombre, Validators.required],
        cantidad: [this.productSave.cantidad, Validators.required],
        categoria: [this.productSave.categoria, Validators.required],
        codigo: [this.productSave.codigo, Validators.required],
        descripcion: [this.productSave.descripcion, Validators.required],
        precio: [this.productSave.precio, Validators.required]
      })
    })
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(this.product.id, product).subscribe(() => {
      this.updateProductForm.reset()
      this.openSnackBar('Producto editado exitosamente')
      this.router.navigate(['inicio/productos'])
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
