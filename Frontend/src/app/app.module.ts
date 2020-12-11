import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routing, appRoutingProviders } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UsersComponent } from './components/users/users.component';
import { MatTableModule } from '@angular/material/table';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalNewUserComponent } from './components/users/modal-new-user/modal-new-user.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { DataService } from './services/dataService';
import {MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    BlogsComponent,
    UsersComponent,
    BlogItemComponent,
    NewBlogComponent,
    ModalNewUserComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    TextFieldModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],

  providers: [
  appRoutingProviders,
  AuthGuard,
  DataService,
  {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
  }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ], 
})
export class AppModule { }
