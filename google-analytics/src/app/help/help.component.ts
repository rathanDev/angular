import {Component, OnInit} from '@angular/core';
import {GtagService} from '../gtag.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private gtagService: GtagService) {
  }

  ngOnInit() {
    console.log('Help ngOnInit');
  }

  onClick() {
    this.gtagService.fireEvent('click', 'dev', 'helpButtonClick');
  }

}
