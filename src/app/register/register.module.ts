import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RegisterRoutingModule,
    ReactiveFormsModule, FormsModule,
    CommonModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
