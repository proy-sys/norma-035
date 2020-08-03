import { TestBed } from '@angular/core/testing';

import { CanTrabajadorGuard } from './can-trabajador.guard';

describe('CanTrabajadorGuard', () => {
  let guard: CanTrabajadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanTrabajadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
