import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  menus:any={
    "header-menu":[
      {link:"/",name:"Home"},
      {link:"/login",name:"Login"},
      {link:"/dashboard",name:"Dashboard"},
      {link:"/students",name:"Students"},
      {link:"/parent",name:"Parent"},
      {link:"/child",name:"Child"},
    ],
    "left-menu":[
      {link:"/dashboard",name:"Dashboard"},
      {link:"/employees",name:"Employees"},
      {link:"/students",name:"Students"},
    ],
    "right-menu":[
      {link:"/students",name:"Students"},
      {link:"/parent",name:"Parent"},
      {link:"/child",name:"Child"},
      {link:"/tables",name:"Tables"},
    ],
    "footer-menu":{
      copyright: '© 2022 Angular 14',
      brand:'A<span class="text-danger">14</span>',
      menu: [
        {link:"/",name:"Home"},
        {link:"/students",name:"Students"},
        {link:"/parent",name:"Parent"},
        {link:"/child",name:"Child"},
        {link:"/tables",name:"Tables"},
      ]
    },
    "body-content":{}
}
  table:any =[];
  mathTable(){    
    for(let j=1;j<=10;j++){
      this.table.push({num:j});
    }
  }
}
  