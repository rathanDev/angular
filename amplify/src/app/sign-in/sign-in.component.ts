import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    this.auth.signIn(form.value.username, form.value.password);
  }

}
