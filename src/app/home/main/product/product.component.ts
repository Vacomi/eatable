
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Models/Producto.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  id!:string;
  isAdd!: boolean;
  btnMessage: string = this.isAdd ? "Added to cart" : "Add to cart";
  plato: Product = {
    _id: "",
    name: "",
    price: 0,
    category: "",
    description: "",
    picture_url: "",
  };

  constructor(private _sproduct : ProductService, 
              private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.id = params['id'];
      } 
    )
    this._sproduct.getProductId(this.id).subscribe((product: Product) => {
      this.plato = {...product};
      console.log(this.plato);
      
    })
  }
  
  addCart() {

  }

}
