import {Injectable} from '@angular/core';
import {User} from './sign-up/user.model';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const userPool = new CognitoUserPool({
  UserPoolId: 'us-east-1_p6lk6TjAP', // sep23
  ClientId: '58t0gnung96junjmg5kvfamhch' //sep23AppClientId
});

@Injectable()
export class AuthService {

  signInEvent: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
  }

  signUp(registration: User) {
    console.log('In authService username', registration.username, ' password', registration.password);
    const attributeList = [];
    const dataEmail = {
      Name: 'email',
      Value: registration.email
    };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);
    userPool.signUp(registration.username, registration.password, attributeList, null, function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('result', result);
    });
  }

  confirm(registration: User) {
    console.log('confirm', registration);
    const userData = {
      Username: registration.username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(registration.verificationCode, true, function (err, result) {
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

    const thisInstance = this;

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        this.token = result['idToken']['jwtToken'];
        thisInstance.signInEvent.next(this.token);
      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },

    });

  }


}
