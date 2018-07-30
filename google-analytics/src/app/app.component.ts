import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {GtagService} from './gtag.service';

declare const gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Google Analytics - Angular App';

  constructor(private router: Router,
              private gtagService: GtagService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtagService.fireEvent('pageView', 'dev', event.urlAfterRedirects);
      }
    });
  }

}
