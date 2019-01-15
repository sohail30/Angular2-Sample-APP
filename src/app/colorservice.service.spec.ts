import { TestBed, inject } from '@angular/core/testing';

import { ColorserviceService } from './colorservice.service';

describe('ColorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorserviceService]
    });
  });

  it('should be created', inject([ColorserviceService], (service: ColorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
