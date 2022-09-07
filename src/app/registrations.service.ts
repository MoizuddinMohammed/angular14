import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  url='http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  private msgData:any=new Subject();

  public recvData=this.msgData.asObservable();

  setData(obj:any){
    this.msgData.next(obj);
  }
  listOfEmps:any=[];
  saveUserData(data:any){
    return this.http.post(this.url,data);
  }
  getUsers(){    
    return this.http.get(this.url);
  }
  isLoggedIn:boolean=false;
}
