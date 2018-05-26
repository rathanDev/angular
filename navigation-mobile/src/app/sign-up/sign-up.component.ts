import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  confirmUser = false;
  didFail = false;
  isLoading = false;
  @ViewChild('usrForm') form: NgForm;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');
    this.authService.signUp(this.form.value.username, this.form.value.email, this.form.value.password);
  }

}
