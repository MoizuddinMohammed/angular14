import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  p:any='';

  ngOnInit(): void {
  }

  obj:any=[{name:"Moiz",dob:"20-12-1982"}];

  receiveData(e:any){
    console.log(e)
    this.p=e;
  }
}
