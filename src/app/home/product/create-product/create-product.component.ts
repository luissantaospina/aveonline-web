import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
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

  // product: Product | undefined

  // loginForm = new FormGroup({
  //   nombre : new FormControl('', Validators.required),
  //   cantidad : new FormControl('', Validators.required),
  //   categoria : new FormControl('', Validators.required),
  //   codigo : new FormControl('', Validators.required),
  //   descripcion : new FormControl('', Validators.required),
  //   precio : new FormControl('', Validators.required)
  // })

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
      this.createProductForm.reset();
    })
  }
}
