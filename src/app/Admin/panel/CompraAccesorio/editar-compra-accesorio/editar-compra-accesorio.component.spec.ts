import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCompraAccesorioComponent } from './editar-compra-accesorio.component';

describe('EditarCompraAccesorioComponent', () => {
  let component: EditarCompraAccesorioComponent;
  let fixture: ComponentFixture<EditarCompraAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCompraAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCompraAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
