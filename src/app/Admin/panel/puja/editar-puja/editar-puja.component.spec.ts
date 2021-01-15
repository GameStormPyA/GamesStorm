import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPujaComponent } from './editar-puja.component';

describe('EditarPujaComponent', () => {
  let component: EditarPujaComponent;
  let fixture: ComponentFixture<EditarPujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
