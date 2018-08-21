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

  signedUp: boolean;
  confirmedSignUp: boolean;
  resentCode: boolean;

  constructor(private router: Router,
              private auth: AuthService) {
    this.confirmedSignUp = false;
    this.resentCode = false;
  }

  ngOnInit() {
    this.auth.signUpEvent.subscribe(
      res => {
        console.log('res ', res);
        this.signedUp = res;
      },
      err => {
        console.error('err', err);
        this.signedUp = false;
      }
    );
    this.auth.confirmSignUpEvent.subscribe(
      res => {
        console.log('confirmSignUp ', res);
        this.confirmedSignUp = res;
      },
      err => {
        console.error('confSignUp err', err);
        this.confirmedSignUp = false;
      }
    );
    this.auth.resendCodeEvent.subscribe(
      res => {
        console.log('resendCodeEvent ', res);
        this.resentCode = res;
      },
      err => {
        console.error('resendCodeEvent ', err);
        this.resentCode = false;
      }
    );
  }

  initForm() {
  }

  onSignUp(form: NgForm) {
    console.log('signUp', form.value);
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const phone = form.value.phone;
    this.auth.signUp(username, email, phone, password);
  }

  confirm(form: NgForm) {
    console.log('confirm', form.value);
    this.auth.confirmSignUp(form.value.username, form.value.code);
  }

  resendCode(form: NgForm) {
    this.auth.resendConfirmationCode(form.value.username);
  }

}
