import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.models';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private service:SessionService){}

  user: User = {
    name : 'sin nombre',
    email : '',
    phone : '',
    address : '',
  }

  ngOnInit(): void {

    this.service.showuser(sessionStorage.getItem("id")).subscribe( (data: any) => {
      if(data.name) {  this.user.name = data.name }
      if(data.email) {  this.user.email = data.email }
      if(data.phone) {  this.user.phone = data.phone }
      if(data.address) {  this.user.address = data.address }
    })
  }

  logout(){
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("id");
    this.router.navigate(['login']);
  }
}
