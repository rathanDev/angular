import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  imageUrl: string;

  constructor(private auth: AuthService) {
    this.imageUrl = auth.imageUrl;
  }

  ngOnInit() {
  }

  listPublicPictures() {
    this.auth.listPublicPictures();
  }

  listPrivatePictures() {
    this.auth.listPrivatePictures();
  }

}
