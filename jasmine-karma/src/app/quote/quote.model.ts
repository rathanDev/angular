export class QuoteModel {

  quote: string;
  date: string;

  public constructor(quote: string, date: string) {
    this.quote = quote;
    this.date = date;
  }

}
