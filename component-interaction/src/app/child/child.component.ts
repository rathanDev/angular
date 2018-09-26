import {Component, OnInit} from '@angular/core';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private messenger: MessengerService) {
  }

  ngOnInit() {
  }

  toggleHome() {
    this.messenger.toggle();
  }

}
