import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any= FormGroup;
  submitted:boolean=false;

  constructor(
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usr: ['', [Validators.required]],
      pwd: ['', Validators.required]
    });
  }

  get f(){return this.loginForm.controls}
  
  goToTables(){
    this.router.navigate(['/','tables']);
  }
  onSubmit() {
    console.log(this.loginForm)
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/','dashboard']);
  }

}
