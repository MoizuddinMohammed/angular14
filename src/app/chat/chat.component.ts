import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  @Output() sender = new EventEmitter();

  chatForm:any = FormGroup;
  submitted:boolean=false;

  constructor(
    private fb: FormBuilder,
    private chatsServices:ChatsService,
  ) { }
  chatMessages:any=[];
  ngOnInit(): void {
    this.chatForm=this.fb.group({
      message: ['', Validators.required]
    });
  }
  get f(){return this.chatForm.controls}
  senderMessage(){
    console.log('Form Data: ',this.chatForm)
    console.log('Message: ',this.chatForm.value.message)
    this.submitted=true;
    if (this.chatForm.invalid) {
      return;
    }
    let s = {
      name:'Sender',
      message: this.chatForm.value.message,
    }
    this.chatsServices.senderMessage.push(s);
    this.sender.emit(s);
    console.log("Emitter Data :",s);
    console.log("Service Data :",this.chatsServices.senderMessage)
    this.chatMessages=this.chatsServices.senderMessage;
  }
}
