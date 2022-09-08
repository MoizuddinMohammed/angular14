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
  updateUserData(data:any, id:number){
    console.log("Update Service::::",data);
    return this.http.put<any>(this.url + id, data).pipe(map((res: any) => {
      return res
    }))
    //return this.http.post(this.url+id,data);
  }
  isLoggedIn:boolean=false;
}
