import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAccesorioComponent } from './agregar-accesorio.component';

describe('AgregarAccesorioComponent', () => {
  let component: AgregarAccesorioComponent;
  let fixture: ComponentFixture<AgregarAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
