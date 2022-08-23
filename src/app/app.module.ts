import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablesComponent,
    DashboardComponent,
    StudentsComponent,
    RegisterComponent,
    EmployeesComponent,
    ParentComponent,
    ChildComponent,
    FooterComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    ChatComponent,
    UsersComponent,
    NewsComponent,
    NewsHeadlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
