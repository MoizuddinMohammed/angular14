import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'tables',component:TablesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'students',component:StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
