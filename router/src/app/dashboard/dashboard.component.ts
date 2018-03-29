import {Component, OnInit} from '@angular/core';
import {LogService} from '../log.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private logService: LogService) {
    logService.print('Init DashboardComponent');
  }

  ngOnInit() {
  }

}
