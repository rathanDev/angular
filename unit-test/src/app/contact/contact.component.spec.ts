import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactComponent} from './contact.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set submitted to true`, async(() => {
    component.submit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`form should be invalid`, async(() => {
    component.form.controls['username'].setValue('');
    component.form.controls['password'].setValue('pass');
    expect(component.form.valid).toBeFalsy();
  }));
  it(`form should be valid`, async(() => {
    component.form.controls['username'].setValue('user');
    component.form.controls['password'].setValue('pass');
    expect(component.form.valid).toBeTruthy();
  }));

});
