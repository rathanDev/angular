import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  signUpSuccessful: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {

  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmitSignUp(value: any) {
    const email = value.email;
    const password = value.password;
    this.auth.signUp(email, password)
      .subscribe(
        res => {
          this.signUpSuccessful = res;
        },
        err => {
          console.error('Err', err);
        }
      );
  }

}
