import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {ContactComponent} from './contact.component';

describe('ContactComponent', () => {
  let com: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        com = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    com = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have as text "contact page" ', function () {
    expect(com.text).toEqual('Contact Page');
  });

  it('should create', () => {
    expect(com).toBeTruthy();
  });

  it('should set submitted property to true when onSubmit()', async(() => {
    com.onSubmit();
    expect(com.submitted).toBeTruthy();
  }));

  it(`should call the onsubmit() when submit button is clicked`, async(() => {
    fixture.detectChanges();
    spyOn(com, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(com.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid when form text boxes are filled with empty values', async(() => {
    com.contactForm.controls['email'].setValue('');
    com.contactForm.controls['name'].setValue('');
    com.contactForm.controls['text'].setValue('');
    expect(com.contactForm.valid).toBeFalsy();
  }));

  it('form should be valid when form text boxes are filled with valid values', async(() => {
    com.contactForm.controls['email'].setValue('a@b.com');
    com.contactForm.controls['name'].setValue('name');
    com.contactForm.controls['text'].setValue('text');
    expect(com.contactForm.valid).toBeTruthy();
  }));

});
