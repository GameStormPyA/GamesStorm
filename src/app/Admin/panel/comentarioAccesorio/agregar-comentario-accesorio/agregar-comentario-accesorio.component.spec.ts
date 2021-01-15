import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComentarioAccesorioComponent } from './agregar-comentario-accesorio.component';

describe('AgregarComentarioAccesorioComponent', () => {
  let component: AgregarComentarioAccesorioComponent;
  let fixture: ComponentFixture<AgregarComentarioAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarComentarioAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComentarioAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
