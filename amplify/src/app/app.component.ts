import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Amplify';
  subscription: Subscription;
  public loggedIn: boolean;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    // this.subscription = this.auth.isAuthenticated()
    //   .subscribe(res => {
    //     this.loggedIn = res;
    //   });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickSignOut() {
    this.auth.signOut();
  }

}
