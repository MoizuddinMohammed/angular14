import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationsService } from '../registrations.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  faUserEdit = faUserEdit;
  faTrash = faTrash;
  url = 'http://localhost:3000/users';
  EditUser: any = FormGroup;
  submitted: boolean = false;
  today:string=new Date().toISOString().slice(0,10);

  constructor(
    private http: HttpClient, 
    private formbuilder: FormBuilder,
    private registrationsService:RegistrationsService
  ) { }

  userData: any = [];
  singleUserData:any=[];

  ngOnInit(): void {
    this.getUsers().subscribe(res => {
      this.userData = res;
      //console.log('JSon Data',this.userData);
    });

    this.EditUser = this.formbuilder.group({
      name : ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      username : ['', [Validators.required,Validators.email]],
      dob : ['', [Validators.required]],
      mobile : ['', [Validators.required,Validators.pattern('^[0-9 \-\']+')]],
      address : ['', [Validators.required]],
      pincode : ['', [Validators.required,Validators.pattern('^[0-9\-\']+'),Validators.minLength(6),Validators.maxLength(6)]],
    });
  }
  getUsers() {
    // return this.http.get('./assets/json/users.json');
    return this.http.get(this.url);
  }
  get f(){return this.EditUser.controls}
  EditUserData(data: any) {
    console.log('User Data:::;',data);
    this.EditUser.controls['name'].setValue(data.name);
    this.EditUser.controls['username'].setValue(data.username);
    this.EditUser.controls['dob'].setValue(data.dob);
    this.EditUser.controls['mobile'].setValue(data.mobile);
    this.EditUser.controls['address'].setValue(data.address);
    this.EditUser.controls['pincode'].setValue(data.pincode);
    this.singleUserData.id=data.id;
  }
  updateUser(){
    this.submitted=true;
    if(this.EditUser.invalid){
      return;
    }
    console.log("Update DATA::",this.EditUser.value);
    //this.singleUserData={
      this.singleUserData.name = this.EditUser.value.name;
      this.singleUserData.username = this.EditUser.value.username;
      this.singleUserData.dob = this.EditUser.value.dob;
      this.singleUserData.mobile = this.EditUser.value.mobile;
      this.singleUserData.address = this.EditUser.value.address;
      this.singleUserData.pincode = this.EditUser.value.pincode;
    //}
    console.log("Updating DATA::",this.singleUserData);
    this.registrationsService.updateUserData(this.singleUserData,this.singleUserData.id).subscribe((d:any) => {
      alert("Data Updated");
      this.getUsers();
    })
  }
}
