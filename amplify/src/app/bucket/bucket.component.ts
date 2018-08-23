import {Component, OnInit} from '@angular/core';
import {log} from 'util';
import {S3Service} from '../s3.service';

declare var $: any;

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  imageUrl: string;
  fileName: string;

  constructor(private s3Service: S3Service) {
    this.s3Service.getImageEvent.subscribe(res => {
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
    this.s3Service.uploadPic(file);
  }

  viewPic() {
    console.log('name ', this.fileName);
    this.s3Service.viewPic(this.fileName);
  }

  listPublicPictures() {
    this.s3Service.listPublicPictures();
  }

  listPrivatePictures() {
    this.s3Service.listPrivatePictures();
  }

}
