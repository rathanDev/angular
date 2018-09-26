import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childhome: boolean;
  @Output() public childhomeevent = new EventEmitter();

  constructor(private messenger: MessengerService) {
  }

  ngOnInit() {
  }

  toggleHome() {
    // this.childhome = !this.childhome;
    // this.childhomeevent.emit(this.childhome);
    // console.log('@child ', this.childhome);
    this.messenger.toggle();
  }

}
