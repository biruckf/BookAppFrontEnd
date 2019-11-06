import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListAllBooksComponent } from './list-all-books/list-all-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{ path: 'home', component:HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'addbook',component:AddBookComponent},
{path:'listallbooks', component:ListAllBooksComponent},
{
  path: 'auth/login',
  component: LoginComponent
},
{
  path: 'signup',
  component: RegisterComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
