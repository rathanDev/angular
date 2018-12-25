import {TestBed} from '@angular/core/testing';
import {QuoteService} from './quote.service';

describe('QuoteService', () => {

  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new QuoteService();
  });

  it('service should be created', () => {
    const quoteService: QuoteService = TestBed.get(QuoteService);
    expect(quoteService).toBeTruthy();
  });

  it('should create a post in an array', () => {
    const quoteText = 'This is my first post';
    service.addQuote(quoteText);
    expect(service.quotes.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove a post', () => {
    service.addQuote('This is a quote');
    service.removeQuote(0);
    expect(service.quotes.length).toEqual(0);
  });

});
