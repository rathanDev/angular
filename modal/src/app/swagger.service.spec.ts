import { TestBed } from '@angular/core/testing';

import { SwaggerService } from './swagger.service';

describe('SwaggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwaggerService = TestBed.get(SwaggerService);
    expect(service).toBeTruthy();
  });
});
