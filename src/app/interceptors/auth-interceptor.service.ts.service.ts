import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor  {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = sessionStorage.getItem("Token")
    if (token){
      const authReq = req.clone({
       headers: req.headers.set(
         'Authorization', token
       )
       })
     return next.handle(authReq)
     }
    return next.handle(req)
  }
}
