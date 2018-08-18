import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpSuccessful: boolean;

  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {

  }

  initForm() {
  }

  onSignUp(form: NgForm) {
    console.log('signUp', form.value);
    const email = form.value.userEmail;
    const password = form.value.userPassword;
    this.auth.signUp(email, password);
  }

}
