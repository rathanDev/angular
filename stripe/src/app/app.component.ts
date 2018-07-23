import {
  AfterViewInit,
  Component, ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {PaymentService} from './payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  title = 'app';
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(private paymentService: PaymentService) {
  }

  ngAfterViewInit(): void {
    this.card = this.paymentService.stripe.elements();
  }

  ngOnDestroy(): void {
  }

  onChange() {
  }

  submit() {
  }

}
