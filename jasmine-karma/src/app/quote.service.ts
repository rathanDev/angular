import {Injectable} from '@angular/core';
import {QuoteModel} from './quote/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  public quotes: QuoteModel[] = [];

  private daysOfTheWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {
  }

  addQuote(quote: string) {
    const date = new Date();
    const dayOfWeek = this.daysOfTheWeeks[date.getDate()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.quotes.push(
      new QuoteModel(quote, `${dayOfWeek} ${day} ${year}`)
    );
  }

  getQuotes() {
    return this.quotes;
  }

  removeQuote(index) {
    this.quotes.splice(index, 1);
  }

}
