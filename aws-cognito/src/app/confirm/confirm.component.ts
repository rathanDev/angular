import {Component, OnInit} from '@angular/core';
import {Registration} from '../sign-up/registration.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  title = 'Confirmation';
  registration = new Registration();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onConfirm() {
    console.log('onConfirm', this.registration);
    this.authService.confirm(this.registration);
  }

}
