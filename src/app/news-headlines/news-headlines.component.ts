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
  today:string=new Date().toISOString().slice(0,10);
  newsHeadlines:any=[];
  searchByKeyWord:any= FormGroup;
  searchByDate:any= FormGroup;
  submitted:boolean=false;
  keyword:string='top headlines';
  date:string=this.today;
  country:string='us';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.searchByKeyWord = this.fb.group({
      keyword: ['', [Validators.required]],
    });
    this.searchByDate = this.fb.group({
      date: ['', [Validators.required]],
    });
  }
  sortByCountry(e:any) {
    this.country=e.target.value;
    this.getNewsHeadlines(this.country,this.date,'top-headlines').subscribe(res=>{
      this.newsHeadlines=res;
    });
    console.log('Para', this.keyword, this.date,this.country);
  }
  sortByDate(e:any){
    //console.log('Selected Date:::',e.target.value);
    this.date=e.target.value;
    this.getNewsHeadlines(this.keyword,this.date,'everything').subscribe(res=>{
      this.newsHeadlines=res;
    });
    console.log('Para', this.keyword, this.date,this.country);
  }
  get k(){return this.searchByKeyWord.controls};
  get d(){return this.searchByDate.controls};
  searchNewsByKeyWord(){
    //console.log(this.searchByKeyWord);
    this.submitted=true;
    if (this.searchByKeyWord.invalid) {
      return;
    }
    this.keyword=this.searchByKeyWord.value.keyword;
    this.getNewsHeadlines(this.keyword,this.date,'everything').subscribe(res=>{      
      console.log('NEWS Headlines::::',res);
      this.newsHeadlines=res;
    });
    console.log('Para', this.keyword, this.date,this.country);
  }
  
  getNewsHeadlines(data:any,date:any,type:string){
    if(type=='everything'){
      return this.http.get(`https://newsapi.org/v2/everything?q=${data}&to=${date}&sortBy=publishedAt&apiKey=${this.API_KEY}`);
    }else{
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=${data}&category=business&apiKey=${this.API_KEY}`);
    }    
  } 
}
