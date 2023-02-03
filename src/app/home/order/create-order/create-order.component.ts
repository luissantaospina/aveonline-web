import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../order.service";
import {Order} from "../order";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  createOrderForm!: FormGroup
  user: string | null | undefined
  date: string | undefined

  ngOnInit(): void {
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.user = localStorage.getItem('user')
    this.createOrderForm = this.formBuilder.group({
      codigo: ["", Validators.required],
      precio: ["", Validators.required],
      cliente_id: [this.user, Validators.required],
      fecha_compra: ["", Validators.required]
    })
  }

  createOrder(order: Order) {
    this.orderService.createOrder(order).subscribe(order => {
      this.createOrderForm.reset()
      this.openSnackBar('Orden creada exitosamente')
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
