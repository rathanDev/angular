import {Component, OnInit} from '@angular/core';
import {QuoteModel} from './quote.model';
import {QuoteService} from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  public quotes: QuoteModel[];
  public quoteText: string;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
  }

  createNewQuote() {
    this.quoteService.addQuote(this.quoteText);
  }

  removeQuote(index) {
    this.quoteService.removeQuote(index);
  }

}
