import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any= FormGroup;
  submitted:boolean=false;
  invalidMsg:boolean=false;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usr: ['', [Validators.required,Validators.email]],
      pwd: ['', Validators.required]
    });
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
    this.getValidate().subscribe(d=>{    
      let data:any=[];
      data = d;  
      data.forEach((ele:any) => {
        console.log(ele.uname);  
        if(ele.uname===this.loginForm.value.usr && ele.pass===this.loginForm.value.pwd){
          this.router.navigate(['/','dashboard']);
        }else{
          this.invalidMsg=true;
        }       
      });  
    })
    // this.router.navigate(['/','dashboard']);
  }
  getValidate(){
    return this.http.get('./assets/json/creds.json');
  }
}
