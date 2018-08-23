import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signedIn: boolean;

  constructor(private auth: AuthService) {
    this.signedIn = false;
  }

  ngOnInit() {
    this.auth.signInEvent.subscribe(
      res => {
        console.log('signInEvent res', res);
        this.signedIn = res;
      },
      err => {
        console.error('signInEvent err', err);
        this.signedIn = false;
      }
    );
  }

  signIn(form: NgForm) {
    this.auth.signIn(form.value.username, form.value.password);
  }

  signOut() {
    this.auth.signOut();
  }

}
