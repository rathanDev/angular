import {Injectable} from '@angular/core';
import {Registration} from './sign-up/registration.model';
import * as AWS from 'aws-sdk';
import {CognitoIdentity} from 'aws-sdk';

import {CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js';

// userPool
// const poolData = {
//   UserPoolId: 'us-east-1_nT09q7Hv8',
//   ClientId: '3bsakfglbeg3qgid8pjj1pjfth' // angularWebApp
// };

const userPoolId = 'us-east-1_phO8KSDT1'; // userPoolAsDoc
const clientId = 'cct28vp4kojvuqt097ttfvrau'; // webApp
const identityPoolId = 'us-east-1:56057ae1-70da-4f77-a5ae-2f036acdb108';
const region = 'us-east-1';

@Injectable()
export class AuthService {

  constructor() {
  }

  signUp(registration: Registration) {
    console.log('In authService username', registration.username, ' password', registration.password);

    const poolData = {
      UserPoolId: userPoolId, // Your user pool id here
      ClientId: clientId // Your client id here
    };
    const userPool = new CognitoUserPool(poolData);

    const attributeList = [];

    const dataEmail = {
      Name: 'email',
      Value: 'learner.4vr@gmail.com'
    };

    const attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp('username', 'password', attributeList, null, function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('result', result); // data {user: CognitoUser, userConfirmed: false, userSub: "24a35049-48c3-4f86-8804-0d7dec573598"}
    });


  }

}
