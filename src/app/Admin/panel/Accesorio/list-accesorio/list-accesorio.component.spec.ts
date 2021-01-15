import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccesorioComponent } from './list-accesorio.component';

describe('ListAccesorioComponent', () => {
  let component: ListAccesorioComponent;
  let fixture: ComponentFixture<ListAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
