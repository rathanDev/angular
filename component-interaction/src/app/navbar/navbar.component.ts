import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <ul>
      <li *ngIf="navhome"><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() navhome;

  constructor() {
  }

  ngOnInit() {
  }

}
