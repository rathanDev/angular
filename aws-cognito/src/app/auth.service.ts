import { Injectable } from '@angular/core';
import {Registration} from './sign-up/registration.model';

// userPool
const poolData = {
  UserPoolId: 'us-east-1_nT09q7Hv8',
  ClientId: '3bsakfglbeg3qgid8pjj1pjfth' // angularWebApp
};

@Injectable()
export class AuthService {

  constructor() { }

  signUp(registration: Registration) {
    console.log('In authService username', registration.username, ' password', registration.password);
  }

}
