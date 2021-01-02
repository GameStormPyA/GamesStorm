import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPujaComponent } from './list-puja.component';

describe('ListPujaComponent', () => {
  let component: ListPujaComponent;
  let fixture: ComponentFixture<ListPujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
