import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  title = 'Agm Experiment';
  mapCenterLat = 51.678418;
  mapCenterLng = 7.809007;
  lat = 51.678418;
  lng = 7.809007;

  locChanged = false;

  constructor() {
  }

  ngOnInit() {
  }

  changeLoc() {
    this.locChanged = true;

    this.mapCenterLat = 41.678418;
    this.mapCenterLng = 6.809007;
    this.lat = 41.678418;
    this.lng = 6.809007;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
