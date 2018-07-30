import {Component, OnInit} from '@angular/core';
import {GaService} from '../ga.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private gaService: GaService) {
  }

  ngOnInit() {
    console.log('Help ngOnInit');
  }

  onClick() {
    this.gaService.sendGaEvent('click', 'helpPage', 'helpPageClick', 10);
  }

}
