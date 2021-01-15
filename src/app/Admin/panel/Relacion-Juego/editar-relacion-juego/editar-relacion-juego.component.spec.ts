import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRelacionJuegoComponent } from './editar-relacion-juego.component';

describe('EditarRelacionJuegoComponent', () => {
  let component: EditarRelacionJuegoComponent;
  let fixture: ComponentFixture<EditarRelacionJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRelacionJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRelacionJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
