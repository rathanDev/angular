import {
  AfterViewInit,
  Component, ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {PaymentService} from './payment.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  title = 'app';
  @ViewChild('cardInfo') cardInfo: ElementRef;
  elements: any;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  style = {
    base: {
      // Add your base input styles here. For example:
      fontSize: '16px',
      color: '#32325d',
    },
  };


  constructor(private paymentService: PaymentService) {
  }

  ngAfterViewInit(): void {
    this.elements = this.paymentService.stripe.elements();
    this.card = this.elements.create('card', this.style);
    this.card.mount('#card-element');
  }

  ngOnDestroy(): void {
  }

  onChange() {
  }

  async submit(form: NgForm) {
    const {token, error} = await this.paymentService.stripe.createToken(this.card);
    console.log('token', token, 'err', error);
  }

}
