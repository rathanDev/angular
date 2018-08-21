import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  listPictures() {
    this.auth.listPictures();
  }

}
