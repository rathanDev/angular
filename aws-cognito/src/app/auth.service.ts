import { Injectable } from '@angular/core';
import {Registration} from './sign-up/registration.model';

@Injectable()
export class AuthService {

  constructor() { }

  signUp(registration: Registration) {
    console.log('username', registration.username, ' password', registration.password)
  }

}
