import {Component} from '@angular/core';
import {User} from './user.model';
import {AuthService} from '../auth.service';
import {LambdaService} from '../lambda.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  title = 'SignUp';
  registration = new User();

  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.authService.signUp(this.registration);
  }

  get currentRegistration() {
    return JSON.stringify(this.registration);
  }

}
