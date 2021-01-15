import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubastaComponent } from './editar-subasta.component';

describe('EditarSubastaComponent', () => {
  let component: EditarSubastaComponent;
  let fixture: ComponentFixture<EditarSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
