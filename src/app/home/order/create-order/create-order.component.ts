import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../order.service";
import {Order} from "../order";

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

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
    this.createOrderForm = this.formBuilder.group({
      codigo: ["", Validators.required],
      precio: ["", Validators.required],
      cliente_id: [this.user, Validators.required],
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
