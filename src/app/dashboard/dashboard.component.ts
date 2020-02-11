import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []; //It defines a heroes array property

  //The constructor expects Angular to inject the HeroService into a private heroService property:
  constructor(private heroService: HeroService) { 
    console.trace('DashboardComponent constructor');
  } //fin constructor


  //The ngOnInit() lifecycle hook calls getHeroes():
  ngOnInit(): void {
    console.trace('DashboardComponent ngOnInit');
    this.getHeroes();
  }//fin ngOnInit


  /**
   * This getHeroes() returns the sliced list of heroes at positions 1 and 5,
   * returning only four of the Top Heroes (2nd, 3rd, 4th, and 5th)
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }//fin getHeroes

}//fin DashboardComponent
