import {Injectable} from '@angular/core';
import {HEROES} from './heroes/mock-heroes';
import {Observable} from 'rxjs/Observable';
import {Hero} from './heroes/hero';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
