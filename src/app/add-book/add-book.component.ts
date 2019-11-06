import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DuplicateValidator } from '../services/validators/DuplicateValidator';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books:any[]=[];
  submitted=false;
  bookForm: FormGroup;
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService,private http:HttpClient,private formBuilder: FormBuilder,
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

      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            return false;
          } else if (role === 'ROLE_PM') {
            this.authority = 'pm';
            return false;
          }
          this.authority = 'user';
          return true;
        });
    }
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
