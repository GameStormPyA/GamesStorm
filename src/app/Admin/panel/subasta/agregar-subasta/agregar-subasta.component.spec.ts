import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSubastaComponent } from './agregar-subasta.component';

describe('AgregarSubastaComponent', () => {
  let component: AgregarSubastaComponent;
  let fixture: ComponentFixture<AgregarSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
