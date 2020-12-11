//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from "@angular/router";
import { BlogsComponent } from '../blogs/blogs.component';

const routes: Routes = [
  {
    path: 'home/u',
    component: BlogsComponent
  }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],
    declarations: [MenuComponent]
  })
  export class MenuComponentModule {}