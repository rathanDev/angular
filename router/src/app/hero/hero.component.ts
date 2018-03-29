import {Component, OnInit} from '@angular/core';
import {LogService} from '../log.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private logService: LogService) {
    logService.print('Init HeroComponent');
  }

  ngOnInit() {
  }

}
