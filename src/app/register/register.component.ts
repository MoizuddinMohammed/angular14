import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationsService } from '../registrations.service';

// import custom validator to validate that password and confirm password fields match
import { ConfirmPasswordValidator } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:any= FormGroup;
  submitted:boolean=false;
  today:string=new Date().toISOString().slice(0,10);

  constructor(
    private formbuilder: FormBuilder,
    private router:Router,
    private registrationsService:RegistrationsService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name : ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      username : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required,Validators.minLength(6)]],
      cpassword : ['', [Validators.required]],
      dob : ['', [Validators.required]],
      mobile : ['', [Validators.required,Validators.pattern('^[0-9 \-\']+')]],
      address : ['', [Validators.required]],
      pincode : ['', [Validators.required,Validators.pattern('^[0-9\-\']+'),Validators.minLength(6),Validators.maxLength(6)]],
    }, {
        validator: ConfirmPasswordValidator('password', 'cpassword')
    });
  }
  get f(){return this.registerForm.controls}

  
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    console.log("Original DATA::",this.registerForm.value);

    let regObj={
      name: this.registerForm.value.name,
      username:this.registerForm.value.username,
      password:this.registerForm.value.password,
      dob: this.registerForm.value.dob,
      mobile: this.registerForm.value.mobile,
      address: this.registerForm.value.address,
      pincode: this.registerForm.value.pincode,
  }
    //console.log("Modified DATA:::",regObj)
    // this.registrationsService.listOfEmps=regObj;
    this.registrationsService.listOfEmps.push(regObj);
    this.registrationsService.saveUserData(this.registerForm.value).subscribe(res=>{      
      console.log('Data Added::::',res);      
    });
    //console.log("Service DATA:::",this.registrationsService.listOfEmps)
    this.router.navigate(['/','login']);
  }
  today:string=new Date().toISOString().slice(0,10);
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
