import { MessageBundle } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() footerData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
