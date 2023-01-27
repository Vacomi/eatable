import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private sessionsService: SessionService,
    private router: Router
  ){}
  
  onSubmit(){
    console.log('Ingresamos al onsubmit')
    console.log(this.signForm.value);
    
    this.sessionsService.signup(this.signForm.value).subscribe((data: any) =>{

      console.log(typeof data)
      console.log(data);

      alert('Te has registrado exitosamente, Inicia sesion por favor')
      
      this.router.navigate(['']);
    })
  }
}
