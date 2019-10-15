import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookService } from '../book/book.service';

@Injectable()
export class DuplicateValidator {

  debouncer: any;

  constructor(public bookService: BookService){

  }

  validateTitle(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {
        if(control.value!="")
       this.bookService.validateTitle(control.value).then((isfound)=>{
        console.log(isfound);
        if(!isfound)
        resolve(null);
       else
       resolve({'titleInUse': true});
      } );
      }, 1000);      

    });
  }
}