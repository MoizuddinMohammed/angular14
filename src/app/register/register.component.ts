import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationsService } from '../registrations.service';

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
    private router:Router,
    private registrationsService:RegistrationsService
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
    console.log("Original DATA::",this.registerForm.value);

  //  let  reg={
  //   registerForm:{
  //     value:{
  //       address:"addre",
  //       name:"ram",
  //       dob:"10=-10-2022"
  //     }}}

    let regObj={address: this.registerForm.value.address,
    dob: this.registerForm.value.dob,
    mobile: this.registerForm.value.mobile,
    name: this.registerForm.value.name,
    pincode: this.registerForm.value.pincode,
    username:this.registerForm.value.username}
    console.log("Modified DATA:::",regObj)
    // this.registrationsService.listOfEmps=regObj;
    this.registrationsService.listOfEmps.push(regObj);

    console.log("Service DATA:::",this.registrationsService.listOfEmps)
    // this.router.navigate(['/','login']);
  }

}
