import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListAllBooksComponent } from './list-all-books/list-all-books.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DuplicateValidator } from './services/validators/DuplicateValidator';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';





@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListAllBooksComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders,
    DuplicateValidator, 
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }


