import {Injectable} from '@angular/core';

declare const gtag: any;

@Injectable({
  providedIn: 'root'
})
export class GtagService {

  constructor() {
    console.log('ga service constructor');
  }

  // eventType -      pageView  /   click
  // eventCategory -  dev       /   production
  // eventLabel -     pageName  /   buttonName
  fireEvent(eventType, eventCategory, eventLabel) {
    console.log('gtag fireEvent ', eventType, eventCategory, eventLabel);
    gtag('event', eventType, {
      event_category: eventCategory,
      event_label: eventLabel
    });
  }

}
