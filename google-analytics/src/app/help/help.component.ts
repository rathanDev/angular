import {Component, OnInit} from '@angular/core';

declare const ga: any;

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('Help ngOnInit');
  }

  onClick() {
    console.log('onClick');
    this.sendGaEvent();
  }

  sendGaEvent() {
    console.log('onClick sendGaEvent');
    ga('send', 'event', {
      eventCategory: 'click',
      eventLabel: 'help page',
      eventAction: 'help pageclick',
      eventValue: 10
    });
  }

}
