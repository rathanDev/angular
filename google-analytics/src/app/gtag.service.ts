import {Injectable} from '@angular/core';

declare const gtag: any;

@Injectable({
  providedIn: 'root'
})
export class GtagService {

  GA_TRACKING_ID = 'UA-122935322-1';

  constructor() {
    console.log('ga service constructor');
  }

  registerGtag() {
    console.log('registerGtag ', this.GA_TRACKING_ID);
    gtag('config', this.GA_TRACKING_ID, {'app_name': 'webApp'});
  }

  fireScreenView(screenName) {
    console.log('fireScreenView ', screenName);
    gtag('event', 'screen_view', {'screen_name': screenName});
  }

  fireEvent(eventCategory, eventAction, eventLabel) {
    console.log('gtag fireEvent ', eventCategory, eventLabel);
    gtag('event', 'defaultEvent', {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel
    });
  }

}
