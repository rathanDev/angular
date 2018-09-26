import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  messengerhome: boolean;

  toggleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.messengerhome = false;
  }

  toggle() {
    console.log('@messenger toggle');
    this.messengerhome = !this.messengerhome;
    this.toggleSubject.next(this.messengerhome);
    console.log('@messenger home', this.messengerhome);
  }

}
