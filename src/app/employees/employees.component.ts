import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationsService } from '../registrations.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private registrationsService:RegistrationsService,private router:Router) { }

  listOfEmployees:any=[];
  ngOnInit(): void {
this.listOfEmployees=this.registrationsService.listOfEmps;
console.log("List:::",this.listOfEmployees);

if(this.listOfEmployees.length<=0){
  this.router.navigate(['/','login']);

}
  }

}
