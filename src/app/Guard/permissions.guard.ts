import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = sessionStorage.getItem("Token");
    if (token){
      return true;
    }

  alert('You don´t permissions')

  this.router.navigate(['/session/login']);
  return false
  
  }
  token():boolean{  
    return false
  }
}
