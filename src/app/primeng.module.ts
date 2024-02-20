import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importo un boton
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

//Arreglo para los componentes de Prime
const modPrimeNg: any = [
  ButtonModule, 
  CalendarModule, 
  CardModule, 
  InputTextModule, 
  PasswordModule,
  ToastModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Importo el arreglo de componentes
    modPrimeNg
  ],
  exports: [
    //Exporto el arreglo para que otros modulos lo puedan ver
    modPrimeNg
  ]
})
export class PrimengModule { }
