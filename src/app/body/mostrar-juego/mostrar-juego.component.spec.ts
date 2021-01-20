import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarJuegoComponent } from './mostrar-juego.component';

describe('MostrarJuegoComponent', () => {
  let component: MostrarJuegoComponent;
  let fixture: ComponentFixture<MostrarJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
