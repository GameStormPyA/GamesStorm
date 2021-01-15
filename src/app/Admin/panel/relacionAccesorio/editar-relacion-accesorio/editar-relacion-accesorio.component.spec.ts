import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRelacionAccesorioComponent } from './editar-relacion-accesorio.component';

describe('EditarRelacionAccesorioComponent', () => {
  let component: EditarRelacionAccesorioComponent;
  let fixture: ComponentFixture<EditarRelacionAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRelacionAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRelacionAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
