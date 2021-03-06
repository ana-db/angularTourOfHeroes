import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes'; //sustituimos este import por HeroService
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /*si declaraba la variable hero aquí y la inicializaba en el constructor, al cambiar el nombre, 
  no se cambiaba a la vez en el h2 */
  //hero: Hero; //declaramos variables/objetos
  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  */

  heroes: Hero[]; //heroes = HEROES; //lo sustituimos porque lo llamamos desde el servicio
  //selectedHero: Hero; //código muerto en el paso 5, lo quitamos


  constructor(private heroService: HeroService ) { //, private messageService: MessageService) { // +++++++++++++ //código muerto en el paso 5, lo quitamos
    console.trace('HeroesComponent constructor');

    //incializamos:
    /*this.hero = {
      id: 1,
      name: 'Windstorm'
    };*/

  }// fin constructor


  ngOnInit(): void {
    console.trace('HeroesComponent ngOnInit');
    this.getHeroes();
  } //fin ngOnInit

  /*
  //código muerto en el paso 5, lo quitamos
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);   // +++++++++++++
  } //fin onSelect
  */


  //función para recuperar los héroes del servicio:
  getHeroes(): void {
    //nos subscribimos porque devuelve un Observable<Hero[]> :
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  //función para añadir un nuevo héroe:
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }


  //función para eliminar un héroe:
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  /* 
    There's really nothing for the component to do with the Observable returned by heroService.delete() 
    but it must subscribe anyway.

    If you neglect to subscribe(), the service will not send the delete request to the server. 
    As a rule, an Observable does nothing until something subscribes.

    Confirm this for yourself by temporarily removing the subscribe(), clicking "Dashboard", 
    then clicking "Heroes". You'll see the full list of heroes again.
  */


} //fin HeroesComponent


/* INYECTANDO EL MENSAJE EN EL CONSTRUCTOR SALE ESTE ERROR POR CONSOLA:
Uncaught Error: Angular JIT compilation failed: '@angular/compiler' not loaded!
  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.
  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?
  - Alternatively provide the compiler with 'import "@angular/compiler";' before bootstrapping.
    at getCompilerFacade (core.js:610)
    at Function.get (core.js:38351)
    at getNgModuleDef (core.js:2195)
    at assertNgModuleType (core.js:2933)
    at compileNgModuleFactory__POST_R3__ (core.js:41373)
    at PlatformRef.bootstrapModule (core.js:41740)
    at Module../src/main.ts (main.ts:11)
    at __webpack_require__ (bootstrap:79)
    at Object.0 (main.ts:12)
    at __webpack_require__ (bootstrap:79)
*/
