import {Component, OnInit} from '@angular/core';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homesign: boolean;

  constructor(private messenger: MessengerService) {
  }

  ngOnInit() {
    this.homesign = false;
    this.messenger.toggle(this.homesign);
  }

  toggle() {
    this.homesign = !this.homesign;
    this.messenger.toggle(this.homesign);
    console.log('@home sign', this.homesign);
  }

}
