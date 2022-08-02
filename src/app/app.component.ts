import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  
  table:any =[];
  mathTable(){    
    for(let j=1;j<=10;j++){
      this.table.push({num:j});
    }
  }
}
  