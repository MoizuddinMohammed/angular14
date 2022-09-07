import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { RegistrationsService } from '../registrations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any= FormGroup;
  submitted:boolean=false;
  invalidMsg:boolean=false;

  subject:any=new Subject();
  subjectRep:any=new ReplaySubject<any>();
  subjectB:any=new BehaviorSubject<any>(null);
  subjectAsync:any=new AsyncSubject<any>();

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private http: HttpClient,
    private registrationsService: RegistrationsService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
    console.log("aaaa");
    // this.subject.next("1");
    // this.subject.next("1");
    // this.subject.next("1");
    // this.subject.next("1");
    // console.log("Subjects::::",this.subject)
    // this.subject.subscribe((data:any)=>{
    //   console.log("ssssssssssssss",data);
    // })

    this.subject.subscribe((val:any) => {
      console.log("Subjects:::",val);
    });

    this.subjectRep.subscribe((val:any) => {
      console.log("Replay Subjects1:::",val);
    });
    this.subjectRep.next("1");

    this.subjectRep.subscribe((val:any) => {
      console.log("Replay Subjects2:::",val);
    });

    this.subject.next("1");
    this.subject.next("2");
    this.subject.next("3");
    this.subject.next("4");
    this.subject.next("5");
    this.subject.next("6");
    this.subject.next("7");
    // this.subject.complete();


    this.subjectRep.next("2");
    this.subjectRep.next("3");
  }
  get f(){return this.loginForm.controls}  
  goToTables(){
    this.router.navigate(['/','tables']);
  }
  onSubmit() {
    //console.log( "data api checking",this.getValidate());   
    console.log(this.loginForm);
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
    this.invalidMsg=false;
    console.log('1111....');
    this.registrationsService.getUsers().subscribe(u=>{
      let users:any=[];
      users = u;
      console.log('subscrive....',users.length);
      if(users.length>0){
        console.log('subscrive....',users.length);
        users.forEach((user:any) => {
          console.log('Users....',user.username);
          if(user.username===this.loginForm.value.username && user.password===this.loginForm.value.password){
            console.log('Registered User::',user.username);
            this.registrationsService.setData(user.name);
            this.registrationsService.isLoggedIn=true;
            this.router.navigate(['/','dashboard']);
          }else{
            this.invalidMsg=true;
          } 
        });  
      }else{
        this.invalidMsg=true;
      }
    });

    /*this.getValidate().subscribe(d=>{    
      let data:any=[];
      data = d;  
      data.forEach((ele:any) => {
        console.log(ele.username);  
        if(ele.username===this.loginForm.value.username && ele.password===this.loginForm.value.password){
          this.router.navigate(['/','dashboard']);
        }else{
          this.invalidMsg=true;
        }       
      });  
    })*/
    // this.router.navigate(['/','dashboard']);
  }
  getValidate(){
    return this.http.get('./assets/json/creds.json');
  }
  /*sendData(){
    console.log("sending data!!!!");
    this.registrationsService.setData("Rama")
  }*/
}
