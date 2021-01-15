import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelacionJuegoComponent } from './lista-relacion-juego.component';

describe('ListaRelacionJuegoComponent', () => {
  let component: ListaRelacionJuegoComponent;
  let fixture: ComponentFixture<ListaRelacionJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRelacionJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelacionJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
