import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() {
    console.log("constructor")
   }

  ngOnInit(): void {
    this.createTables();
    console.log("on init")
  }
  ngOnChanges(): void {
    // this.createTables();
    console.log("on ngOnChanges")
  }
  ngDoCheck(): void {
    // this.createTables();
    console.log("on ngDoCheck")
  }
  ngAfterContentInit(): void {
    // this.createTables();
    console.log("on ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    // this.createTables();
    console.log("on ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    // this.createTables();
    console.log("on ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    // this.createTables();
    console.log("on ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    // this.createTables();
    console.log("on ngOnDestroy")
  }
  tables:any =[];
  table:any =[];

  createTables(){
    for(let i=1;i<=20;i++){
      
      this.tables.push({num:i});
    }
    for(let j=1;j<=10;j++){
      this.table.push({jnum:j});
    }
  }

}
