import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  constructor(
    private sessionsService: SessionService,
    private router: Router,
    private readonly fb: FormBuilder
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

  ngOnInit(): void {
    this.signForm = this.initForm();
  }
  onPathValue(): void {
    this.signForm.patchValue({ email:'' });
  }

  onSetValue(): void {
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
    })}
}
