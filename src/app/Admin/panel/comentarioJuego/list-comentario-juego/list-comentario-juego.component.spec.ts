import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComentarioJuegoComponent } from './list-comentario-juego.component';

describe('ListComentarioJuegoComponent', () => {
  let component: ListComentarioJuegoComponent;
  let fixture: ComponentFixture<ListComentarioJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComentarioJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComentarioJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
