import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Hero} from './hero';
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeroService {

  private heroesUrl = "https://jsonplaceholder.typicode.com/users";

  //service in service
  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    //todo: send the message after fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    // return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    //js template literal for embedding the id
    this.messageService.add(`HeroService fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
    // return of(this.http.get<Hero[]>(this.heroesUrl).find(hero => hero.id === id));
  }

}
