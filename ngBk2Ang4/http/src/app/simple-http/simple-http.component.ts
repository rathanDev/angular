import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  makeRequest() {
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => this.data = res.body);
  }

}
