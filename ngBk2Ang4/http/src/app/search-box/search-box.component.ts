import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResult} from '../search-result/search-result.model';
import {YouTubeSearchService} from '../you-tube-search.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup');
  }

}
