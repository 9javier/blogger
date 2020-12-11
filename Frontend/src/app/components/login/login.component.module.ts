//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports: [
      CommonModule,
      MatCardModule
    ],
    declarations: [LoginComponent]
  })
  export class LoginComponentModule {}