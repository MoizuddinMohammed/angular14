import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  menuObj:any=[
    {link:"/",name:"Home"},
    {link:"/login",name:"Login"},
    {link:"/dashboard",name:"Dashboard"},
    {link:"/students",name:"Students"},
  ];
  menus:any={
    "header-menu":this.menuObj,
    "left-menu":this.menuObj,
    "right-menu":this.menuObj,
    "footer-menu":{
      copyright: '© 2022 Angular 14',
      brand:'A<span class="text-danger">14</span>',
      menu:this.menuObj
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
  