import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComentarioAccesorioComponent } from './editar-comentario-accesorio.component';

describe('EditarComentarioAccesorioComponent', () => {
  let component: EditarComentarioAccesorioComponent;
  let fixture: ComponentFixture<EditarComentarioAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComentarioAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComentarioAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
