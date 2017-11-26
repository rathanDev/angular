import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Hero} from './hero';
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";

@Injectable()
export class HeroService {

  //service in service
  constructor(private messageService: MessageService) {
  }


  getHeroes(): Observable<Hero[]> {
    //todo: send the message after fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
