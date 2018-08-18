import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import Amplify, {Auth} from 'aws-amplify';
import {environment} from '../environments/environment';
import {fromPromise} from 'rxjs/internal/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  public signUp(email, password) {
    console.log('auth service signUp, email:' + email + ', password:' + password);
    Auth.signUp(email, password)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.error('Err', err);
        return;
      });
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

  /*  public isAuthenticated(): Observable<boolean> {
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
    }*/

  public async getCurrentAuthenticatedUser() {
    return await Auth.currentAuthenticatedUser();
  }

  public isAuthenticated() {
    console.log('isAuthenticated');
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('user', user);
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
