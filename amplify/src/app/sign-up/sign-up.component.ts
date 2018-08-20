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
    this.auth.signedUpSuccessful.subscribe(
      res => {
        console.log('res ', res);
        this.signUpSuccessful = res;
      },
      err => {
        console.error('err', err);
        this.signUpSuccessful = false;
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

}
