import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  title = 'Sign In';
  user = new User();

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  onSignIn() {
    console.log('onSignIn');
    this.authService.signIn('', '');
  }

}
