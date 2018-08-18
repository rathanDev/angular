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
    const username = form.value.username;
    const email = form.value.userEmail;
    const password = form.value.userPassword;
    this.auth.signUp(username, email, password);
  }

  confirm(form: NgForm) {
    console.log('confirm', form.value);
    this.auth.confirmSignUp(form.value.username, form.value.code);
  }

}
