import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'tables',component:TablesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'students',component:StudentsComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
