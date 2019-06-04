import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  title = 'Agm Experiment';
  lat = 51.678418;
  lng = 7.809007;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
