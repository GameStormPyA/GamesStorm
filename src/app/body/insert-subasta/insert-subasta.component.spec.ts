import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSubastaComponent } from './insert-subasta.component';

describe('InsertSubastaComponent', () => {
  let component: InsertSubastaComponent;
  let fixture: ComponentFixture<InsertSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
