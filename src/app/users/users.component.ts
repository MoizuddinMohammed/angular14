import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationsService } from '../registrations.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  faUserEdit = faUserEdit;
  faTrash = faTrash;
  url = environment.API_RL;
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
  searchUser: string='';

  ngOnInit(): void {
    this.getUsers();

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
    this.registrationsService.getUsers().subscribe((res)=>{
      this.userData = res;
    });
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
    const data =  {
      id: this.singleUserData.id,
      username:this.EditUser.value.username,
      // password:"123",
      name :this.EditUser.value.name,
      dob :this.EditUser.value.dob,
      mobile :this.EditUser.value.mobile,
      address:this.EditUser.value.address, 
      pincode :this.EditUser.value.pincode
    }
    console.log("Updating DATA::",this.singleUserData);
    this.registrationsService.updateUserData(data.id,data).subscribe((d:any) => {
      this.getUsers();
    })
  }
  deleteUser(id: any){
    this.registrationsService.deleteUser(id).subscribe((d:any) => {
      this.getUsers();
    });
  }
}
