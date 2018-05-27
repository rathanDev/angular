import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  signedIn = false;

  constructor(private authService: AuthenticationService) {
    this.authService.signedInEvent.subscribe(value => {
      this.signedIn = value;
    });
  }

  ngOnInit() {
  }

  signOut() {
    console.log('signOut');
    this.authService.signOut();
  }

}
