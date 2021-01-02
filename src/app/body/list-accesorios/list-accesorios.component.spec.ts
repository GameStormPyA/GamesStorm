import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccesoriosComponent } from './list-accesorios.component';

describe('ListAccesoriosComponent', () => {
  let component: ListAccesoriosComponent;
  let fixture: ComponentFixture<ListAccesoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccesoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
