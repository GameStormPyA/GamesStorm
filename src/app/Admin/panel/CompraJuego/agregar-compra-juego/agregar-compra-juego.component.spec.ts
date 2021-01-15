import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCompraJuegoComponent } from './agregar-compra-juego.component';

describe('AgregarCompraJuegoComponent', () => {
  let component: AgregarCompraJuegoComponent;
  let fixture: ComponentFixture<AgregarCompraJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCompraJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCompraJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
