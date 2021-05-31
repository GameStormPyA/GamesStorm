import { TestBed } from '@angular/core/testing';

import { VigilateGuard } from './vigilate.guard';

describe('VigilateGuard', () => {
  let guard: VigilateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
