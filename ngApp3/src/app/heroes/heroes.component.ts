import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  //service-in-service scenario:
  //MessageService is injected to HeroService &
  //HeroService is injected to HeroesComponent
  constructor(private heroService: HeroService) {}

  ngOnInit() {  //life cycle hook
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

    //synchronous - ui might freeze
    // this.heroes = this.heroService.getHeroes();
  }

  // lamdaFunction = function (heroes) {
  //   this.heroes = heroes;
  // };

}
