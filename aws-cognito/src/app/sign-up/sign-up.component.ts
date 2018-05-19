import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Registration} from './registration.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  formName = 'SignUp';
  submitted = false;
  model = new Registration('username', 'password');

  constructor() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted');
  }

  get currentRegistration() {
    return JSON.stringify(this.model);
  }

}
