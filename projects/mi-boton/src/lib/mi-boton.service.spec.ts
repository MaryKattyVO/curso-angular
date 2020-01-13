import { TestBed } from '@angular/core/testing';

import { MiBotonService } from './mi-boton.service';

describe('MiBotonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiBotonService = TestBed.get(MiBotonService);
    expect(service).toBeTruthy();
  });
});
