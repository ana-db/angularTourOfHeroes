import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
}) //un provider es algo que puede crear o consumir un servicio
export class HeroService {

  constructor(private messageService: MessageService) { 
    console.trace('HeroService constructor');
  } //fin constructor


  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  } //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

}//fin HeroService
