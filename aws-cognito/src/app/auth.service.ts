import {Injectable} from '@angular/core';
import {Registration} from './sign-up/registration.model';
// import {CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';

// userPool
// const poolData = {
//   UserPoolId: 'us-east-1_nT09q7Hv8',
//   ClientId: '3bsakfglbeg3qgid8pjj1pjfth' // angularWebApp
// };

const poolId = ' us-east-1_nT09q7Hv8';
const clientId = '3bsakfglbeg3qgid8pjj1pjfth'; // angularWebApp
const identityPoolId = '';

@Injectable()
export class AuthService {

  constructor() {
  }

  signUp(registration: Registration) {
    console.log('In authService username', registration.username, ' password', registration.password);

    AWS.config.apiVersions = {
      cognitoidentity: '2014-06-30',
      // other service API versions
    };

    const params = {
      IdentityPoolId: identityPoolId,
      AllowUnauthenticatedIdentities: true || false, /* required */
      IdentityPoolName: 'us-east-1_nT09q7Hv8', /* required */
      CognitoIdentityProviders: [
        {
          ClientId: 'STRING_VALUE',
          ProviderName: 'STRING_VALUE',
          ServerSideTokenCheck: true || false
        },
        /* more items */
      ],
      DeveloperProviderName: 'STRING_VALUE',
      OpenIdConnectProviderARNs: [
        'STRING_VALUE',
        /* more items */
      ],
      SamlProviderARNs: [
        'STRING_VALUE',
        /* more items */
      ],
      SupportedLoginProviders: {
        '<IdentityProviderName>': 'STRING_VALUE',
        /* '<IdentityProviderName>': ... */
      }
    };

    const cognitoIdentity = new AWS.CognitoIdentity();
    cognitoIdentity.createIdentityPool(params, function (err, data) {
      if (err) {
        console.error('err at signup ', err);
        return;
      }
      console.log('sign up data', data);
    });


  }

}
