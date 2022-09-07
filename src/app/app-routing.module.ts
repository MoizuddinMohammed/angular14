import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { NewsComponent } from './news/news.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { TablesComponent } from './tables/tables.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'tables',component:TablesComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'students',component:StudentsComponent, canActivate:[AuthGuard]},
  {path:'employees',component:EmployeesComponent, canActivate:[AuthGuard]},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'users',component:UsersComponent, canActivate:[AuthGuard]},
  {path:'news',component:NewsComponent},
  {path:'headlines',component:NewsHeadlinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
