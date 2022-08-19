import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})

export class LeftComponent implements OnInit {
  @Input() leftData:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
