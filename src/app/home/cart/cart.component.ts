import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Producto.model';
import { Location } from '@angular/common';
import { CarritoService } from 'src/app/services/carrito.service';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/Models/user.models';

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
    private _suser : SessionService
  ) {}
  ngOnInit(): void {
    this.productList = this._scart.getProductCart();
    console.log(this.productList);
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
