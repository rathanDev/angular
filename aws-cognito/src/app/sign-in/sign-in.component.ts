import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../sign-up/user.model';
import {LambdaService} from '../lambda.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  title = 'Sign In';
  user = new User();

  constructor(private authService: AuthService,
              private lambdaService: LambdaService) {
  }

  ngOnInit() {
  }


  callAuthLambda() {
    this.lambdaService.callAuthSepLambda().subscribe(
      res => {
        console.log('res', res);
      },
      err => {
        console.error('err', err);
      }
    )
  }

  callLambda() {
    this.lambdaService.callSepLambda().subscribe(
      res => {
        console.log('res', res);
      },
      err => {
        console.error('err', err);
      }
    )
  }


  onSignIn() {
    console.log('onSignIn', this.user);
    this.authService.signIn(this.user);
  }

  onSignOut() {
    console.log('onSignOut', this.user);
    this.authService.signOut();
  }

}
