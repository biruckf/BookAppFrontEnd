import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListAllBooksComponent } from './list-all-books/list-all-books.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: 'home', component:HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'addbook',component:AddBookComponent},
{path:'listallbooks', component:ListAllBooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
