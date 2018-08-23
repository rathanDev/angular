import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {log} from 'util';

declare var $: any;

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  imageUrl: string;
  fileName: string;

  constructor(private auth: AuthService) {
    this.auth.getImageEvent.subscribe(res => {
        console.log('res ', res);
        this.imageUrl = res;
        log('this.imageUrl: ' + this.imageUrl);
      },
      err => {
        console.error('err', err);
      });
  }

  ngOnInit() {
  }

  upload() {
    const file = $('#fileInputId').prop('files')[0];
    console.log('image file', file);
    this.auth.uploadPic(file);
  }

  viewPic() {
    console.log('name ', this.fileName);
    this.auth.viewPic(this.fileName);
  }

  listPublicPictures() {
    this.auth.listPublicPictures();
  }

  listPrivatePictures() {
    this.auth.listPrivatePictures();
  }

}
