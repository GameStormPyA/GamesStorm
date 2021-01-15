import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelacionAccesorioComponent } from './list-relacion-accesorio.component';

describe('ListRelacionAccesorioComponent', () => {
  let component: ListRelacionAccesorioComponent;
  let fixture: ComponentFixture<ListRelacionAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRelacionAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRelacionAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
