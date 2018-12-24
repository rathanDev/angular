import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  text = 'Contact Form';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.minLength(4)
      ]),
      text: new FormControl(this.contact.text, Validators.required)
    });
  }

}
