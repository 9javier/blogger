//import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
    declarations: [HomeComponent,HeaderComponent],
    entryComponents:[],
    providers:[],
    imports: [
      CommonModule, 
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
  })
  export class HomeComponentModule {}