import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  })
  fb: any;

  constructor(
    private sessionsService: SessionService,
    private router: Router,
  ){}
  
  onSubmit(){
    console.log('Ingresamos al onsubmit')
    console.log(this.loginForm.value);
    
    this.sessionsService.login(this.loginForm.value).subscribe((data: any) =>{
      if (data.token){
        
        sessionStorage.setItem("Token", data.token);
        sessionStorage.setItem("id", data.id);
        console.log(data);

        this.router.navigate(['/home'])
      } else {
        alert('Su correo o contraseña son incorrectas')
      }
    })
  }
 
}
