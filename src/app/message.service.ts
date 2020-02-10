import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { 
    console.trace('MessageService constructor');
  } //fin constructor

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
