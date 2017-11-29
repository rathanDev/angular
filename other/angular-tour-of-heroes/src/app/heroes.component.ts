import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";
// import {HeroService} from './hero.service'

@Component({
  selector: 'my-heroes',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],

  templateUrl: './heroes.component.html',

  styleUrls: ['./heroes.component.css'],

  // providers: [HeroService]

})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
