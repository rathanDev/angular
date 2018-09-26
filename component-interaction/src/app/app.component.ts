import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  na = 'component-interaction';

  apphome: boolean;
  news: boolean;

  toggleHome() {
    this.apphome = !this.apphome;
    console.log('@toggleHome ', this.apphome);
  }

}
