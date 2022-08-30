import { Component, Input, OnInit } from '@angular/core';
import { RegistrationsService } from '../registrations.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() menu:any;
  constructor(private registrationsService:RegistrationsService) { }
rcvdData:any;
  ngOnInit(): void {

    this.registrationsService.recvData.subscribe((d:any)=>{
      console.log("Received Data:::",d)
      this.rcvdData=d;
    })
  }

}
