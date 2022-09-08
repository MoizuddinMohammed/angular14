import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  url='http://localhost:3000/users/';
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
  updateUserData(id: any, data: any){
    console.log("calinng!!!!!",data);
    console.log("ID!!!!!",id);
    return this.http.patch<any>(this.url +id, data);
    // return this.http.put<any>(this.url +data.id, data);
  }
  deleteUser(id:any){
    return this.http.delete(this.url +id);
  }
  isLoggedIn:boolean=false;
}
