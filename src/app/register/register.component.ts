import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:any= FormGroup;
  submitted:boolean=false;

  constructor(
    private formbuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name : ['', Validators.required],
      username : ['', [Validators.required]],
      password : ['', [Validators.required]],
      cpassword : ['', [Validators.required]],
      dob : ['', [Validators.required]],
      mobile : ['', [Validators.required]],
      address : ['', [Validators.required]],
      pincode : ['', [Validators.required]],
    });
  }
  get f(){return this.registerForm.controls}

  
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    this.router.navigate(['/','login']);
  }

}
