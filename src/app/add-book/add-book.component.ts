import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DuplicateValidator } from '../services/validators/DuplicateValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books:any[]=[];
  submitted=false;
  bookForm: FormGroup;
  constructor(private http:HttpClient,private formBuilder: FormBuilder,
    private duplicateValidator:DuplicateValidator, private router: Router) { }

  ngOnInit() {
     //form validation
     this.bookForm = this.formBuilder.group({
      titleDto: [null, Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      this.duplicateValidator.validateTitle.bind(this.duplicateValidator)],
      authorDto: ['',],
      publisherDto: ['',],
      descriptionDto: ['',],
      catagoryDto: ['',],
      publicationDateDto: ['',],
      formatDto: ['',],
      inStockNumberDto: ['',],
      isbnDto: ['',],
      languageDto: ['',],
      listPriceDto: ['',],
      numberOfPagesDto: ['',],
      ourPriceDto: ['',],
      shippingWeightDto: ['',],
      activeDto: ['',]

    });
  }
  // authenticated() { return this.app.authenticated; }


  get f() { return this.bookForm.controls; }

onSubmit(){
  this.submitted = true;
    //check if form is invallid and terminate
    if (this.bookForm.invalid) {

      return;
    } else {
  this.addBook(this.bookForm.value);
    }
}

  public addBook(form: any) {
    this.http.post<any[]>('/books', form,{})
    .subscribe(
       data => this.books = data);
       this.router.navigateByUrl('/');
    }
}
