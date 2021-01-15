import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPujaComponent } from './agregar-puja.component';

describe('AgregarPujaComponent', () => {
  let component: AgregarPujaComponent;
  let fixture: ComponentFixture<AgregarPujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
