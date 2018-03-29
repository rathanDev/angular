import {Component, OnInit} from '@angular/core';
import {LogService} from '../log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private logService: LogService) {
    logService.print('Init LogComponent');
  }

  ngOnInit() {
  }

}
