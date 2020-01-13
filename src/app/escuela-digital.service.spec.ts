import { TestBed } from '@angular/core/testing';

import { EscuelaDigitalService } from './escuela-digital.service';

describe('EscuelaDigitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscuelaDigitalService = TestBed.get(EscuelaDigitalService);
    expect(service).toBeTruthy();
  });
});
