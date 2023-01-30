import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Producto.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  search!:string;
  mostrar:boolean = true;
  productList : Product[] = [];
  cateList = new Set(['peruana']);
  filteredProducts : Product[] = []; 

  constructor( private _producto : ProductService,
               private _router : Router ) { };

  ngOnInit(): void {
    this._producto.getProducts().subscribe( (data:Product[]) => {
      this.productList = data;
      this.filteredProducts = data;
      this.categorizar();
    })
  }

  categorizar() {
    for(let c of this.productList) {
      this.cateList.add(c.category);
    }
  }

  selectProduct(_id : string) {
    this._router.navigate(['product'],{ queryParams:{ id : _id } })
  }
  buscarxCategoria(cat:string) {
    this.filteredProducts = this.productList.filter(( plato: Product) => cat === plato.category)
  }

  buscarxNombre(){
    this.filteredProducts = this.productList.filter((plato: Product) =>{
      const regex = new RegExp(this.search.toLowerCase())
      
      return regex.test(plato.name.toLowerCase())
    })
    this.mostrar = this.filteredProducts.length === this.productList.length
  }


}
