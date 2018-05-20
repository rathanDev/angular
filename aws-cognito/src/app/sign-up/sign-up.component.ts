import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Registration} from './registration.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  title = 'SignUp';
  registration = new Registration();

  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.authService.signUp(this.registration);
  }

  get currentRegistration() {
    return JSON.stringify(this.registration);
  }

}
