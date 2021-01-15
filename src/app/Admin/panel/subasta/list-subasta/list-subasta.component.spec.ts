import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubastaComponent } from './list-subasta.component';

describe('ListSubastaComponent', () => {
  let component: ListSubastaComponent;
  let fixture: ComponentFixture<ListSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
