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

  fileUrl: string;
  fileName: string;

  constructor(private s3Service: S3Service) {
    this.s3Service.getFileEvent.subscribe(res => {
        console.log('res ', res);
        this.fileUrl = res;
        log('this.fileUrl: ' + this.fileUrl);
      },
      err => {
        console.error('err', err);
      });
  }

  ngOnInit() {
  }

  upload() {
    const file = $('#fileInputId').prop('files')[0];
    console.log('file ', file);
    this.s3Service.uploadPublic(file);
  }

  view() {
    console.log('name ', this.fileName);
    this.s3Service.viewPublic(this.fileName);
  }

  listPublicPictures() {
    this.s3Service.listPublicPictures();
  }

  listPrivatePictures() {
    this.s3Service.listPrivatePictures();
  }

}
