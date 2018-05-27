import {EventEmitter, Injectable, Output} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  @Output()
  signedInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  signUp(username, email, password) {
    console.log('signup', username, email, password);
  }

  signIn(username, password) {
    console.log('authService signIn');
    this.signedInEvent.emit(true);
    this.router.navigate(['/page1']);
  }

  signOut() {
    console.log('authService signOut');
    this.signedInEvent.emit(false);
  }

}
