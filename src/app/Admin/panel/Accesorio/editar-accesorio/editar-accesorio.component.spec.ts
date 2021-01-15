import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAccesorioComponent } from './editar-accesorio.component';

describe('EditarAccesorioComponent', () => {
  let component: EditarAccesorioComponent;
  let fixture: ComponentFixture<EditarAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
