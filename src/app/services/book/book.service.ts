import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookExists:any;
  constructor(private http:HttpClient) { }

validateTitle(name:string):Promise<Boolean>{
  console.log(name);
  return  this.http.get(`/books/existsbytitle/${name}`)
  .toPromise()
  .then(
    res => { // Success
      return <boolean>res;
    }
  );
}



getAllBooks() {
    return this.http.get<any[]>('/books/findall/');
  }

  public addBook(bookDto: any) {
    return this.http.post<any[]>('/books', bookDto);
    }

  }
