import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../sign-up/user.model';
import {ApiService} from '../api.service';

declare var gapi: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  title = 'Sign In';
  user = new User();
  token: string;

  constructor(private authService: AuthService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.authService.signInEvent.subscribe(
      res => {
        console.log('res', res);
        this.token = res;
      }
    )
  }

  ngAfterViewInit(): void {
    this.initGoogle();
  }

  public auth2: any;

  public initGoogle() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1067376010740-pnm86cun36ncbt0qprouagd9f3r33jal.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let idToken = googleUser.getAuthResponse().id_token;
        console.log('Token || ' + idToken);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        this.token = idToken;


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  googleSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  callAuthHttp() {
    this.apiService.callAuthHttp(this.token).subscribe(
      res => {
        console.log('res', res);
      },
      err => {
        console.error('err', err);
      }
    )
  }

  callHttp() {
    this.apiService.callHttp().subscribe(
      res => {
        console.log('res', res);
      },
      err => {
        console.error('err', err);
      }
    )
  }


  onSignIn() {
    console.log('onSignIn', this.user);
    this.authService.signIn(this.user);
  }

  onSignOut() {
    console.log('onSignOut', this.user);
    this.authService.signOut();
  }

}
