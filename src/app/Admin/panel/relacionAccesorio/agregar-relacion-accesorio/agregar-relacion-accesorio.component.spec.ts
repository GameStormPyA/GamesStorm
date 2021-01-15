import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRelacionAccesorioComponent } from './agregar-relacion-accesorio.component';

describe('AgregarRelacionAccesorioComponent', () => {
  let component: AgregarRelacionAccesorioComponent;
  let fixture: ComponentFixture<AgregarRelacionAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRelacionAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRelacionAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
