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

  public signedUpSuccessful: BehaviorSubject<boolean>;
  public signedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    Amplify.configure(environment.amplify);
    this.signedUpSuccessful = new BehaviorSubject<boolean>(false);
    this.signedIn = new BehaviorSubject<boolean>(false);
  }

  public signUp(username, email, phone, password) {
    console.log('auth service signUp, username: ' + username + ', email:' + email + ', phone:' + phone + ', password:' + password);
    const body = {
      'username': username,
      'password': password,
      'attributes': {
        'email': email,
        'phone_number': phone
      }
    };
    Auth.signUp(body)
      .then(res => {
        console.log('res', res);
        this.signedUpSuccessful.next(true);
      })
      .catch(err => {
        console.error('Err', err);
        this.signedUpSuccessful.next(false);
      });
  }

  public confirmSignUp(username, code) {
    console.log('confirm sign up username:' + username + ', code:' + code);
    return Auth.confirmSignUp(username, code)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.error('err', err);
      });
  }

  public signIn(username, password) {
    console.log('auth service signIn, username:' + username + ', password:' + password);
    Auth.signIn(username, password)
      .then(res => {
        console.log('res', res);
        this.signedIn.next(true);
      })
      .catch(err => {
        console.error('err', err);
        this.signedIn.next(false);
      });
  }

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
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public signOut() {
    console.log('signOut');
    Auth.signOut()
      .then(res => {
        console.log('res ', res);
        this.signedIn.next(false);
      })
      .catch(err => {
        console.error('err', err);
        this.signedIn.next(false);
      });
  }

}
