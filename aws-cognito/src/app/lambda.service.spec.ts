import { TestBed, inject } from '@angular/core/testing';

import { LambdaService } from './lambda.service';

describe('LambdaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LambdaService]
    });
  });

  it('should be created', inject([LambdaService], (service: LambdaService) => {
    expect(service).toBeTruthy();
  }));
});
