import {Injectable} from '@angular/core';
// import {any} from 'codelyzer/util/function';

@Injectable()
export class PaymentService {

  stripe = Stripe('pk_test_xRwFJT2RrWh1sFWEU2gEDTbr');

  constructor() {
  }

}
