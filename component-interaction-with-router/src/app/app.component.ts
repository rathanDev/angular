import {Component} from '@angular/core';
import {MessengerService} from './messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction-with-router';

  appsign: boolean;

  constructor(messenger: MessengerService) {
    messenger.toggleSubject.subscribe(
      res => {
        console.log('@App subject', res);
        this.appsign = res;
        console.log('@App apphome', this.appsign);
      }
    );
  }

}
