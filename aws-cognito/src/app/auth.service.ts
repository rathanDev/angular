import {Injectable} from '@angular/core';
import {User} from './sign-up/user.model';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession} from 'amazon-cognito-identity-js';

// userPool
// const poolData = {
//   UserPoolId: 'us-east-1_nT09q7Hv8',
//   ClientId: '3bsakfglbeg3qgid8pjj1pjfth' // angularWebApp
// };

const userPoolId = 'us-east-1_phO8KSDT1'; // userPoolAsDoc
const clientId = 'cct28vp4kojvuqt097ttfvrau'; // webApp
const identityPoolId = 'us-east-1:56057ae1-70da-4f77-a5ae-2f036acdb108';
const region = 'us-east-1';

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
      onSuccess: function (session: CognitoUserSession) {
        console.log('authenticateUser onSuccess', session);
        this.onUserAuthentication();
      },
      onFailure: function (err) {
        console.log('authenticateUser onFailure', err);
        // alert(err.message || JSON.stringify(err));
      },

    });
  }

  signOut() {
    console.log('authService signOut');
    userPool.getCurrentUser().signOut();
  }

  onUserAuthentication() {
    const cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
        if (err) {
          console.error('cognitoUser.getSession err', err);
          return;
        }
        if (!session.isValid()) {
          console.log('session invalid', session);
        }
        console.log('session valid', session);

      });
    }

    /*    // call refresh method in order to authenticate user and get new temp credentials
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            console.log('Successfully logged!');
          }
        });*/
  }

}
