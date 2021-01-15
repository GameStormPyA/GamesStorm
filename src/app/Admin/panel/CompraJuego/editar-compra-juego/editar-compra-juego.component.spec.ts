import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCompraJuegoComponent } from './editar-compra-juego.component';

describe('EditarCompraJuegoComponent', () => {
  let component: EditarCompraJuegoComponent;
  let fixture: ComponentFixture<EditarCompraJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCompraJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCompraJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
