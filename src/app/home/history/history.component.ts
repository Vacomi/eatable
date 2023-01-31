import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OrdersService } from 'src/app/services/orders.service';
import { SessionService } from 'src/app/services/session.service';
import { Order } from 'src/app/Models/Orders.models';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Models/Producto.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  
  plato: Product = {
    _id: "",
    name: "",
    price: 0,
    category: "",
    description: "",
    picture_url: "",
  };
  ide = sessionStorage.getItem('id');
  ordenes:any = [
  ];
  copia2: Order[] = []

  lsproducts = [];
  constructor( private lol : Location, private _sorder : OrdersService, private _suser: SessionService, private _sproduct : ProductService ) {}

  ngOnInit(): void {
    this._sorder.getOrders().subscribe( ( orders : any) => {
      this.copia2 = orders.filter((orden:any) => orden.user_id === this.ide)
      this.ordenes = [...orders];

      this._sproduct.getProducts().subscribe( (data:any) => {
        this.lsproducts = data; 
      })
    })
    // this._sproduct.getProducts().subscribe( (data:any) => {
    //   this.lsproducts = data; 
    // })
  }

  getTotal (id:string | undefined ):any {
    if(!id) {return  ''}
    let nuevoord = this.copia2.filter( order => order._id === id )
    let obj = {...nuevoord[0]};
    let total = 0;
    for(let product of obj.items) {
      total += this.getPrecio(product._id) * product.quantity;
    }
    return total;
  }

  getName( id:string ):any {
    let pro : Product[] = this.lsproducts.filter( (p:any) => p._id === id)
    let obj = {...pro[0]};
    return  obj.name;  
  }
  getPrecio ( id:string ){
    let pro : Product[] = this.lsproducts.filter( (p:any) => p._id === id)
    let obj = {...pro[0]};
    return  obj.price;  
  }

  back() {
    this.lol.back();
  }
}
