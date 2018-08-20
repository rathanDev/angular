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
    this.auth.signedIn.subscribe(
      res => {
        console.log('signedId res', res);
        this.signedIn = res;
      },
      err => {
        console.error('signedIn err', err);
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
