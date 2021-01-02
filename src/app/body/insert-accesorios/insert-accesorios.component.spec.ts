import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAccesoriosComponent } from './insert-accesorios.component';

describe('InsertAccesoriosComponent', () => {
  let component: InsertAccesoriosComponent;
  let fixture: ComponentFixture<InsertAccesoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAccesoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
