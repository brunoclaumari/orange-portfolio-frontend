import { TestBed } from '@angular/core/testing';

import { AutenticaGuard } from './autentica.guard';

describe('AutenticaGuard', () => {
  let guard: AutenticaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
