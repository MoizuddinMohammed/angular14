import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  faUser = faUser;
  faClock=faClock;
  today:string=new Date().toISOString().slice(0,10);

  constructor(private http: HttpClient) { }
  newsData:any=[];
  newsHeadlines:any=[];
  ngOnInit(): void {
    this.getNews().subscribe(res=>{      
      console.log('NEWS RESULTS::::',res);
      this.newsData=res;
    });
    this.getNewsHeadlines().subscribe(res=>{      
      console.log('NEWS Headlines::::',res);
      this.newsHeadlines=res;
    });
  }
  API_KEY='0f42e442954946c2b0e430da03aa3ff7';
  getNewsHeadlines(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.API_KEY}`);
  }  
  getNews(){
    // let url="https://newsapi.org/v2/everything?q=tesla&from=2022-07-23&sortBy=publishedAt&apiKey="+API_KEY;
    return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=${this.today}&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
}
