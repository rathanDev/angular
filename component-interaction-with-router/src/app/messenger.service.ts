import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  toggleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  toggle(to) {
    this.toggleSubject.next(to);
  }

}
