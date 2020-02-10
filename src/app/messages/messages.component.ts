import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
    console.trace('MessagesComponent constructor');
   }//fin constructor

  ngOnInit(): void {
    console.trace('MessagesComponent ngOnInit');
  }//fin ngOnInit

} //fin MessagesComponent
