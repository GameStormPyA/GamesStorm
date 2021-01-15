import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRelacionJuegoComponent } from './agregar-relacion-juego.component';

describe('AgregarRelacionJuegoComponent', () => {
  let component: AgregarRelacionJuegoComponent;
  let fixture: ComponentFixture<AgregarRelacionJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRelacionJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRelacionJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
