import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import {LogService} from '../log.service';

describe('HeroComponent', () => {

  let component: HeroComponent;
  let logService: LogService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    logService = new LogService();
    component = new HeroComponent(logService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
