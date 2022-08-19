import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  sData:any=[];
  senderData(s:any){
    console.log('Parent Data: ',s);
    this.sData=s;
    console.log('Parent Data2: ',this.sData);
  }





  batch="LABS - 2022";
  sursh_id : any = '';
  studentMarkDetail : any =[
    {id:1,name:'Arbaaz',hindi:98,english:92,m1:95,mm:91,physics:95,social:88},
    {id:2,name:'Laila',hindi:89,english:55,m1:88,mm:88,physics:72,social:99},
    {id:3,name:'Riya',hindi:91,english:90,m1:66,mm:88,physics:58,social:77},
    {id:4,name:'Kartik',hindi:56,english:55,m1:88,mm:88,physics:72,social:37},
    {id:5,name:'Moni',hindi:56,english:55,m1:52,mm:41,physics:60,social:37},
    {id:6,name:'Ravi',hindi:48,english:42,m1:44,mm:53,physics:36,social:37},
    {id:7,name:'James',hindi:42,english:38,m1:45,mm:39,physics:36,social:37},
    {id:8,name:'Alia',hindi:29,english:75,m1:93,mm:88,physics:30,social:37},
  ];
  table:any=[];
  tables:any=[];
  ngOnInit(): void {
  }

  /************************** */
  SubjectTitle : string ='Heading';
  Subjects: any = [
    {name:'Hindi',code:'hi'},
    {name:'Telugu',code:'te'},
    {name:'English',code:'en'},
    {name:'Maths',code:'ma'},
  ]
}
