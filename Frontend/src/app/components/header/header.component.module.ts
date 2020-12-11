//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [],
    entryComponents:[HeaderComponent],
    providers:[HeaderComponent],
    imports: [
      CommonModule,
    ],
    exports:[HeaderComponent],
    
  })
  export class HeaderComponentModule {}