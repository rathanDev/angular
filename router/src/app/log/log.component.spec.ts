import {async, TestBed} from '@angular/core/testing';

import {LogComponent} from './log.component';
import {LogService} from '../log.service';

describe('LogComponent', () => {

  let component: LogComponent;
  let logService: LogService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    logService = new LogService();
    component = new LogComponent(logService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
