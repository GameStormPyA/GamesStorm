import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPujaComponent } from './edit-puja.component';

describe('EditPujaComponent', () => {
  let component: EditPujaComponent;
  let fixture: ComponentFixture<EditPujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
