import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {UserService} from '../user.service';

describe('UserComponent', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        {
          provide: UserService
          // ,
          // useClass: UserServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have one user', (() => {
    expect(component.users.length).toEqual(1);
  }));

  xit('should render one user', (() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user1');
  }));

});
