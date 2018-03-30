import {Injectable} from '@angular/core';
import {HEROES} from './heroes/mock-heroes';
import {Observable} from 'rxjs/Observable';
import {Hero} from './heroes/hero';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {errorObject} from 'rxjs/util/errorObject';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    console.log('getHeroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
