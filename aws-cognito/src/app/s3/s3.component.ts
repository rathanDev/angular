import { Component, OnInit } from '@angular/core';
import {S3Service} from '../s3.service';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.css']
})
export class S3Component implements OnInit {

  constructor(private s3Service: S3Service) { }

  ngOnInit() {
    console.log('s3 ngOnInit');
    this.s3Service.access();
  }

}
