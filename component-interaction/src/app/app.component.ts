import {Component} from '@angular/core';
import {MessengerService} from './messenger.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [navhome]="apphome"></app-navbar>

    <br>
    <hr>

    <app-child></app-child>

    <br>
    <hr>

    <div>App Component: apphome: {{apphome}}</div>

    <button (click)="toggleHome()">Toggle Home</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apphome: boolean;

  constructor(messenger: MessengerService) {
    messenger.toggleSubject.subscribe(
      res => {
        console.log('@App subject', res);
        this.apphome = res;
        console.log('@App apphome', this.apphome);
      }
    );
  }

  toggleHome() {
    this.apphome = !this.apphome;
    console.log('@App apphome ', this.apphome);
  }

}
