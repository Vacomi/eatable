import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/Orders.models';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUri = 'http://localhost:8000/api/orders';

 constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<any[]>(this.apiUri);
  }
  
  createOrder(orden: any): Observable<Order> {
    return this.http.post<Order>(this.apiUri, orden);
  }

}
