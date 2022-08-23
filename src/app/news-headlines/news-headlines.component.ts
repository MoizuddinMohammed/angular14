import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.scss']
})
export class NewsHeadlinesComponent implements OnInit {
  API_KEY='0f42e442954946c2b0e430da03aa3ff7';
  newsHeadlines:any=[];
  searchByCountry:any= FormGroup;
  searchByKeyWord:any= FormGroup;
  submitted:boolean=false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.searchByCountry = this.fb.group({
      country: ['', [Validators.required]],
    });
    this.searchByKeyWord = this.fb.group({
      keyword: ['', [Validators.required]],
    });
  }

  get f(){return this.searchByCountry.controls};
  get k(){return this.searchByKeyWord.controls};
  searchNewsByKeyWord(){
    console.log(this.searchByKeyWord);
    this.submitted=true;
    if (this.searchByKeyWord.invalid) {
      return;
    }
    this.getNewsHeadlines(this.searchByKeyWord.value.keyword,'keyword').subscribe(res=>{      
      console.log('NEWS Headlines::::',res);
      this.newsHeadlines=res;
    });
  }
  /*searchNewsByCountry() {
    //console.log( "data api checking",this.getValidate());   
    console.log(this.searchByCountry);
    this.submitted=true;
    if (this.searchByCountry.invalid) {
      return;
    }
    this.getNewsHeadlines(this.searchByCountry.value.country,'country').subscribe(res=>{      
      console.log('NEWS Headlines::::',res);
      this.newsHeadlines=res;
    });
  }*/
  
  
  getNewsHeadlines(word:any,type:string){
    if(type=='keyword'){
      return this.http.get(`https://newsapi.org/v2/everything?q=${word}&from=2022-07-23&sortBy=publishedAt&apiKey=${this.API_KEY}`);
    }else{
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=${word}&category=business&apiKey=${this.API_KEY}`);
    }    
  } 
}
