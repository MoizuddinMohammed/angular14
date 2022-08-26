import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  url='http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  listOfEmps:any=[];
  saveUserData(data:any){
    return this.http.post(this.url,data);
  }
}
