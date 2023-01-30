import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Producto.model';
import { Location } from '@angular/common';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList : Product[] = [];
  total!: number;

  constructor (
    private _scart : CarritoService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.productList = this._scart.getProductCart();
    console.log(this.productList);
    this.total = this._scart.getTotal();
  }

  reduceQuantity(plato: Product){
    if (plato.quantity){
      plato.quantity -= 1
      if (plato.quantity >0){
        this._scart.updateCart(this.productList)
        this.total = this._scart.getTotal()
      } else{
        this._scart.deleteProductCart(plato._id || '')
      }
    } 
  }

  back(){
    this.location.back()
  }
}
