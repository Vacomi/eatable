import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/Models/user.models';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private service:SessionService,private location: Location){}
  update = true;
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
  back() {
    if(this.update) {
      this.location.back()
    }else {
      this.update = true;
    }
  }
  btnchange() {
    this.update = !this.update;
  } 

  updateUser(n:string, e:string, p:string, a:string){
    this.user.name = n;
    this.user.email = e;
    this.user.phone = p;
    this.user.address = a;

    this.service.updateuser(this.user,sessionStorage.getItem('id')).subscribe( data => {
     alert('Haz actualizado con ÉXITO')
    })

  }

  logout(){
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("id");
    this.router.navigate(['login']);
  }
}
