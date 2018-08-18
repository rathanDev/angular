import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import Amplify, {Auth} from 'aws-amplify';
import {environment} from '../environments/environment';
import {fromPromise} from 'rxjs/internal/observable/fromPromise';
import {catchError, map, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  public signUp(email, password): Observable<any> {
    console.log('auth service signUp, email:' + email + ', password:' + password);
    return fromPromise(Auth.signUp(email, password));
  }

/*  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }*/

  /*public signIn(email, password): Observable<any> {
    console.log('auth service signIn, email:' + email + ', password:' + password);
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }*/

  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  public signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        res => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        err => {
          console.error('err', err);
        }
      );
  }

}
