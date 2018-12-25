import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {QuoteComponent} from './quote.component';
import {QuoteService} from '../quote.service';

describe('QuoteComponent', () => {

  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the quotes from the service', () => {
    const quoteService = fixture.debugElement.injector.get(QuoteService);
    fixture.detectChanges();
    expect(quoteService.getQuotes()).toEqual(component.quotes);
  });

  it('should create a new post', () => {
    component.quoteText = 'I love this post';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('');
  });


});
