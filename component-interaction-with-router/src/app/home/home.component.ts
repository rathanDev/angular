import {Component, OnInit} from '@angular/core';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homesign: boolean;

  constructor(private messenge: MessengerService) {
  }

  ngOnInit() {
  }

  toggle() {
    this.homesign = !this.homesign;
  }

}
