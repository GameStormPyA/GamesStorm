import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubastaComponent } from './edit-subasta.component';

describe('EditSubastaComponent', () => {
  let component: EditSubastaComponent;
  let fixture: ComponentFixture<EditSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
