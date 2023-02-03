import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../order";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute
  ) { }

  order: any
  orderSave: any
  updateOrderForm!: FormGroup

  ngOnInit(): void {
    this.order = this.route.snapshot.params
    this.getOrder(this.order.id)
    this.updateOrderForm = this.formBuilder.group({
      codigo: ["", Validators.required],
      precio: ["", Validators.required],
      cliente_id: ["", Validators.required]
    })
  }

  getOrder(id: string): void {
    this.orderService.getOrder(id).subscribe(order => {
      this.orderSave = order
      this.updateOrderForm = this.formBuilder.group({
        codigo: [this.orderSave.codigo, Validators.required],
        precio: [this.orderSave.precio, Validators.required],
        cliente_id: [this.orderSave.cliente_id, Validators.required],
      })
    })
  }

  updateOrder(order: Order) {
    this.orderService.updateOrder(this.order.id, order).subscribe(order => {
      this.updateOrderForm.reset()
      this.openSnackBar('Orden editada exitosamente')
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