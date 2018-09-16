import {Component, OnInit} from '@angular/core';

declare var mixpanel: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'mix-panel';

  ngOnInit(): void {
    mixpanel.track(
      "InitEvent",
      {"page": "app.component.ts"}
    );
  }

}
