import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  YOU_TUBE_API_KEY = '';
  YOU_TUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

  constructor() { }

  ngOnInit() {
  }

}
