import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { 
    console.trace('HeroDetailComponent constructor');
  } //fin constructor

  ngOnInit(): void {
    console.trace('HeroDetailComponent ngOnInit');
  } //fin ngOnInit

} //fin HeroDetailComponent
