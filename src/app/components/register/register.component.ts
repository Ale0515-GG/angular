import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from '../../interfaces/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  regisForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    repPassword: ['', Validators.required]
  },
  {
    validators: passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private message: MessageService,
    private router: Router
    ){}

  get name(){
    return this.regisForm.controls['name']
  }

  get email(){
    return this.regisForm.controls['email']
  }

  get password(){
    return this.regisForm.controls['password']
  }

  get repPassword(){
    return this.regisForm.controls['repPassword']
  }

  submitRegis(){
    const data = {...this.regisForm.value}

    delete data.repPassword
  
    this.authService.registerUser(data as User).subscribe(
      response => {
        console.log(response)
        this.message.add({ severity: 'success', summary: 'Success', detail: 'Registro Agregado'})
        this.router.navigate(['login'])
      },
      error => console.log(error)
    )

    console.log(this.regisForm.value)
  }
}
