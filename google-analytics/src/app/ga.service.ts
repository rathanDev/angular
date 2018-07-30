import {Injectable} from '@angular/core';

declare const ga: any;

@Injectable({
  providedIn: 'root'
})
export class GaService {

  constructor() {
    console.log('ga service constructor');
  }

  sendGaEvent(category, label, action, value) {
    console.log('onClick sendGaEvent');
    ga('send', 'event', {
      eventCategory: category,
      eventLabel: label,
      eventAction: action,
      eventValue: value
    });
  }

}
