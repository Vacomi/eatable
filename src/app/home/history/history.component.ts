import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OrdersService } from 'src/app/services/orders.service';
import { SessionService } from 'src/app/services/session.service';
import { Order } from 'src/app/Models/Orders.models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  
  objOrder =  {
    delivery_address: '',
  }
  ide = sessionStorage.getItem('id');
  ordenes:any = [
  ];
  copia2: Order[] = []

  constructor( private lol : Location, private _sorder : OrdersService, private _suser: SessionService, private _sproduct : ProductService ) {}

  ngOnInit(): void {
    this._sorder.getOrders().subscribe( ( orders : any) => {
      console.log(orders);
      this.copia2 = orders.filter((orden:any) => orden.user_id === this.ide)
      this.ordenes = [...orders];
      console.warn(this.ordenes);
    })
    // this._sproduct.getProductId
  }

  

  getPName( id:string ) {
    this._sproduct.getProductId(id).subscribe((product:any) => product.name);
  }
  getPPrecio ( id:string ){
    this._sproduct.getProductId(id).subscribe((product:any) => {
      console.warn(product);
      
    });
  }

  back() {
    this.lol.back();
  }
}
