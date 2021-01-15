import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComentarioJuegoComponent } from './editar-comentario-juego.component';

describe('EditarComentarioJuegoComponent', () => {
  let component: EditarComentarioJuegoComponent;
  let fixture: ComponentFixture<EditarComentarioJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComentarioJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComentarioJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
