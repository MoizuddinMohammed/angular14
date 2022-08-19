import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parent:any;
  @Input() objData:any;

  @Output() info = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){
    let obj={name:"ram",mob:"1234567890"}
    this.info.emit(obj);
  }

}
