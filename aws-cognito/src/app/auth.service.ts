import {Injectable} from '@angular/core';
import {User} from './sign-up/user.model';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';

// userPool
// const poolData = {
//   UserPoolId: 'us-east-1_nT09q7Hv8',
//   ClientId: '3bsakfglbeg3qgid8pjj1pjfth' // angularWebApp
// };

const userPoolId = 'us-east-1_phO8KSDT1'; // userPoolAsDoc
const clientId = 'cct28vp4kojvuqt097ttfvrau'; // webApp
const identityPoolId = 'us-east-1:56057ae1-70da-4f77-a5ae-2f036acdb108'; // congnitoIdentityPool2
const region = 'us-east-1';
const bucketName = 'websitebucket2018';

const poolData = {
  UserPoolId: userPoolId, // Your user pool id here
  ClientId: clientId // Your client id here
};
const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthService {

  constructor() {
  }

  signUp(registration: User) {
    console.log('In authService username', registration.username, ' password', registration.password);

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

  confirm(registration: User) {
    console.log('confirm', registration);

    const userData = {
      Username: registration.username,
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration('123456', true, function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    });
  }

  signOut() {
    console.log('authService signOut');
    userPool.getCurrentUser().signOut();
  }

  signIn(user: User) {
    console.log('authService signIn ', user);

    const authenticationData = {
      Username: user.username,
      Password: user.password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: user.username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    console.log('cognitoUser', cognitoUser);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('authenticateUser onSuccess result', result);

        // POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = region;

        // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //   IdentityPoolId: '...', // your identity pool id here
        //   Logins: {
        //     // Change the key below according to the specific region your user pool is in.
        //     'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result.getIdToken().getJwtToken()
        //   }
        // });

        // AWS.config.update(new AWS.CognitoIdentityCredentials({
        //   IdentityPoolId: identityPoolId, // your identity pool id here
        //   Logins: {
        //     // Change the key below according to the specific region your user pool is in.
        //     'cognito-idp.us-east-1.amazonaws.com/us-east-1_phO8KSDT1': result.getIdToken().getJwtToken()
        //   }
        // }));

        AWS.config.update({
          region: region,
          credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: identityPoolId
          })
        });
        console.log('AWS.config', AWS.config.credentials);

        AWS.config.getCredentials(function (re) {
          console.log('getCredentials ', re);
        });

        const s3 = new AWS.S3({
          apiVersion: '2006-03-01',
          params: {Bucket: bucketName}
        });

        s3.listObjects({Bucket: bucketName}, function (err, data) {
          if (err) {
            console.error('Err in listObjects', err);
            return;
          }
          console.log('data', data);
        });

      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },

    });

  }


}
