import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private message: MessageService,
    private router: Router
    ){}

  get email(){
    return this.loginForm.controls['email']
  }

  get password(){
    return this.loginForm.controls['password']
  }

  login(){
    console.log('Login')
    const {email, password} = this.loginForm.value

    this.authService.getUserbyEmail(email as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password){
          sessionStorage.setItem('email', email as string)
          this.router.navigate(['/home'])
        }
        else{
          this.message.add({ severity: 'error', summary: 'Error', detail: 'Email o Contraseña incorrecto'})
        }
      },
      error => {
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Email o Contraseña incorrecto'})
      }
    )
  }
}
