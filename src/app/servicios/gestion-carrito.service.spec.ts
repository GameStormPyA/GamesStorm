import { TestBed } from '@angular/core/testing';

import { GestionCarritoService } from './gestion-carrito.service';

describe('GestionCarritoService', () => {
  let service: GestionCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
