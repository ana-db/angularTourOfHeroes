import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /*si declaraba la variable hero aquí y la inicializaba en el constructor, al cambiar el nombre, 
  no se cambiaba a la vez en el h2 */
  //hero: Hero; //declaramos variables/objetos
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero: Hero;


  constructor() { 
    console.trace('HeroesComponent constructor');

    //incializamos:
    /*this.hero = {
      id: 1,
      name: 'Windstorm'
    };*/

  }// fin constructor


  ngOnInit(): void {
    console.trace('HeroesComponent ngOnInit');
  } //fin ngOnInit


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

} //fin HeroesComponent
