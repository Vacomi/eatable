import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Producto.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mostrar:boolean = true;
  productList : Product[] = [];

  constructor( private _producto : ProductService ) { };

  ngOnInit(): void {
    this._producto.getProducts().subscribe( (data:Product[]) => {
      this.productList = data;
    })

  }

  buscar(){
    this.mostrar=false
  }


}
