import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCompraAccesorioComponent } from './agregar-compra-accesorio.component';

describe('AgregarCompraAccesorioComponent', () => {
  let component: AgregarCompraAccesorioComponent;
  let fixture: ComponentFixture<AgregarCompraAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCompraAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCompraAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
