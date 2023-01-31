import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Producto.model';
import { Location } from '@angular/common';
import { CarritoService } from 'src/app/services/carrito.service';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/Models/user.models';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/Models/Orders.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productList : Product[] = [];
  total!: number;
  gocheck: boolean = false;
  id = sessionStorage.getItem('id');
  user: User = {
    name : 'sin nombre',
    email: '',
    phone : '',
    address : '',
  }

  constructor (
    private _scart : CarritoService,
    private location: Location,
    private _suser : SessionService,
    private _sorder : OrdersService,
    private router : Router
  ) {}
  ngOnInit(): void {
    this.productList = this._scart.getProductCart();

    this.total = this._scart.getTotal();
    
    this._suser.showuser(this.id).subscribe( (user : any) => {
      this.user.name = user.name;
      this.user.phone = user.phone;
      this.user.address = user.address;
    })

  }
  
  reduceQuantity(plato: Product){
    if (plato.quantity){
      plato.quantity -= 1
      if (plato.quantity > 0 ){
        this._scart.updateCart(this.productList)
        this.total = this._scart.getTotal()
      } else{
        this._scart.deleteProductCart(plato._id || '')
        this.productList = this._scart.getProductCart();
      }
    }
  }

  incrementQuantity(plato: Product){
    if (plato.quantity){
      plato.quantity += 1;
      this._scart.updateCart(this.productList) 
      this.total = this._scart.getTotal();
      
    }
    this._scart.updateCart(this.productList)
  }

  confirmarPedido() {
    if(!this.user.address) {
      return alert('Tiene que tener una Direccion para continuar')
    }
    let fecha = new Date();
    let pedido: Order = {
      delivery_address : this.user.address || '',
      date_order: fecha,
      user_id: sessionStorage.getItem('id') || '',
      items : JSON.parse(localStorage.getItem('cart') || '')
    }

    
    this._sorder.createOrder(pedido).subscribe( orders => {
      console.log(orders)
    })
    localStorage.setItem('cart', JSON.stringify([]));
    this.router.navigate(['/home/history']);
  }

  checkout() {
    this.gocheck = true;
  }

  back(){
    this.location.back()
  }
  volver() {
    this.gocheck = false;
  }
}
