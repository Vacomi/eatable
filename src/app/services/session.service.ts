import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUri: string = "http://localhost:8000/api"

  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: any){
    console.warn('Ingrese al login del servicio')
    return this.http.post(`${this.apiUri}/login`, credentials)
  }

  signup(newUser: any) {
      return this.http.post(`${this.apiUri}/users`, newUser);
  }

  showuser(id:string | null) {
    return this.http.get(`${this.apiUri}/profile/${id}`);
  }
}
