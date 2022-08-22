import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  faUserEdit = faUserEdit;
  faTrash=faTrash;

  constructor(private http: HttpClient) { }

  userData:any=[];

  ngOnInit(): void {
    this.getUsers().subscribe(res=>{
      this.userData=res;
      //console.log('JSon Data',this.userData);
    });
  }
  getUsers(){    
    return this.http.get('./assets/json/users.json');
  }

}
