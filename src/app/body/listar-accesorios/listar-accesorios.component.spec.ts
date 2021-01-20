import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAccesoriosComponent } from './listar-accesorios.component';

describe('ListarAccesoriosComponent', () => {
  let component: ListarAccesoriosComponent;
  let fixture: ComponentFixture<ListarAccesoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAccesoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
