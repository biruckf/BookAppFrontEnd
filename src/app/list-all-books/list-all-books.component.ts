import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-all-books',
  templateUrl: './list-all-books.component.html',
  styleUrls: ['./list-all-books.component.css']
})
export class ListAllBooksComponent implements OnInit {
  books:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    
    this.http.get('/books/findall')
      .subscribe(data => this.books = data);
   
  }

  deletebook(id:any){
    return this.http.delete(`/books/delete/${id}`)
    .toPromise()
    .then(()=>{
      this. getAllBooks();
      console.log(id);
    });
    
  }


}
