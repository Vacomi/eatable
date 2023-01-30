import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiProduct = 'http://localhost:8000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiProduct);
  }
  
  getProductId(id:string):Observable<Product> {
    return this.http.get<Product>(`${this.apiProduct}/${id}`)
  }
  
}
