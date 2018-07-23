import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  stripe = Stripe('pk_test_xRwFJT2RrWh1sFWEU2gEDTbr');

  constructor() { }

}
