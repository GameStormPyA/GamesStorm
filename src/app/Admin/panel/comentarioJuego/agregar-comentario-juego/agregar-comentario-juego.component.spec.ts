import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComentarioJuegoComponent } from './agregar-comentario-juego.component';

describe('AgregarComentarioJuegoComponent', () => {
  let component: AgregarComentarioJuegoComponent;
  let fixture: ComponentFixture<AgregarComentarioJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarComentarioJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComentarioJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
