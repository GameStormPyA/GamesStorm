import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAccesorioComponent } from './mostrar-accesorio.component';

describe('MostrarAccesorioComponent', () => {
  let component: MostrarAccesorioComponent;
  let fixture: ComponentFixture<MostrarAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
