import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  constructor(private auth: AuthService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
