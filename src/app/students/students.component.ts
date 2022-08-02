import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  batch="LABS - 2022";
  sursh_id : any = '';
  studentMarkDetail : any =[
    {id:1,name:'Arbaaz',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:98,english:92,m1:95,mm:91,physics:95,social:88},
    {id:2,name:'Laila',dob:'22-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:89,english:55,m1:88,mm:88,physics:72,social:99},
    {id:3,name:'Riya',dob:'2-02-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:91,english:90,m1:66,mm:88,physics:58,social:77},
    {id:4,name:'Kartik',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:56,english:55,m1:88,mm:88,physics:72,social:37},
    {id:5,name:'Moni',dob:'21-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:56,english:55,m1:52,mm:41,physics:60,social:37},
    {id:6,name:'Ravi',dob:'14-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:48,english:42,m1:44,mm:53,physics:36,social:37},
    {id:7,name:'James',dob:'16-01-1992',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:42,english:38,m1:45,mm:39,physics:36,social:37},
    {id:8,name:'Rani',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:29,english:75,m1:93,mm:88,physics:30,social:37},
    {id:9,name:'Ayan',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:98,english:92,m1:95,mm:91,physics:95,social:88},
    {id:10,name:'Lewis',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:89,english:55,m1:88,mm:88,physics:72,social:99},
    {id:11,name:'Reena',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:91,english:90,m1:66,mm:88,physics:58,social:77},
    {id:12,name:'Kaylash',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:56,english:55,m1:88,mm:88,physics:72,social:37},
    {id:13,name:'Monika',dob:'12-09-1995',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:56,english:55,m1:52,mm:41,physics:60,social:37},
    {id:14,name:'Kiran',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:48,english:42,m1:44,mm:53,physics:36,social:37},
    {id:15,name:'John',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:42,english:38,m1:45,mm:39,physics:36,social:37},
    {id:16,name:'Anya',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:29,english:75,m1:93,mm:88,physics:30,social:37},
    {id:17,name:'Ajay',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:98,english:92,m1:95,mm:91,physics:95,social:88},
    {id:18,name:'Laxman',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:89,english:55,m1:88,mm:88,physics:72,social:99},
    {id:19,name:'Rahul',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:91,english:90,m1:66,mm:88,physics:58,social:77},
    {id:20,name:'Kajol',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:56,english:55,m1:88,mm:88,physics:72,social:37},
    {id:21,name:'Mahesh',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:56,english:55,m1:52,mm:41,physics:60,social:37},
    {id:22,name:'Ronak',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:48,english:42,m1:44,mm:53,physics:36,social:37},
    {id:23,name:'Jenni',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:42,english:38,m1:45,mm:39,physics:36,social:37},
    {id:24,name:'Jasper',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:29,english:75,m1:93,mm:88,physics:30,social:37},
    {id:25,name:'Paul',dob:'12-09-1993',phone:'9874561230',address:'12-34-569, Sanjay Gandhi Nagar',city:'Hyderabad',hindi:29,english:75,m1:93,mm:88,physics:30,social:37},
  ];
  table:any=[];
  ngOnInit(): void {
    //alert('Loading');
    this.testResult();
  }
  studentDetails : any =[];
  total_pass : number = 0;
  testResult(){
    //alert('hi');
    this.studentMarkDetail.forEach((stud:any) => {
      let total = (stud.hindi+stud.english+stud.m1+stud.mm+stud.physics+stud.social);
      let percentage = ((total/600)*100).toFixed(2);
      let per = parseFloat(percentage);
      let status = 'Fail';
      let grade = 'F';
      if(stud.hindi>=35 && stud.english>=35 && stud.m1>=35 && stud.mm>=35 && stud.physics>=35 && stud.social>=35){
          status = 'Pass';
          this.total_pass+=1;
          if(per>=90){
            grade = 'A+';
          }else if(per>=80 && per<90){
            grade = 'A';
          }else if(per>=70 && per<80){
            grade = 'B+';
          }else if(per>=60 && per<70){
            grade = 'B';
          }else if(per>=50 && per<60){
            grade = 'C+';
          }else if(per>=40 && per<50){
            grade = 'C';
          }else{
            grade = 'D';
          } 
      }
      let student = {
        id:stud.id,
        name:stud.name,
        dob:stud.dob,
        phone:stud.phone,
        address:stud.address,
        city:stud.city,
        hindi:stud.hindi,
        english:stud.english,
        m1:stud.m1,
        mm:stud.mm,
        physics:stud.physics,
        social:stud.social,
        total:total,
        percentage:percentage,
        status:status,
        grade:grade
      };
      console.log(student);
      this.studentDetails.push(student);
    });

    for(let i=1;i<=10;i++){
      this.table.push({i:i})
    }
  }
}
