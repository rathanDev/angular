import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  signedIn = false;

  constructor(private router: Router) {
  }

  signUp(username, email, password) {
    console.log('signup', username, email, password);
  }

  signIn(username, password) {
    console.log('authService signIn');
    this.signedIn = true;
    this.router.navigate(['/page1']);
  }

  signOut() {
    console.log('authService signOut');
    this.signedIn = false;
  }

}
