import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  signUp(username, email, password) {
    console.log('signup', username, email, password);
  }

}
