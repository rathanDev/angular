import {Component} from '@angular/core';
import {MessengerService} from './messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  na = 'component-interaction';

  apphome: boolean;
  news: boolean;

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
