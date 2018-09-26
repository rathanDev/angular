import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childhome: boolean;
  @Output() public childhomeevent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleHome() {
    this.childhome = !this.childhome;
    this.childhomeevent.emit(this.childhome);
    console.log('@child ', this.childhome);
  }

}
