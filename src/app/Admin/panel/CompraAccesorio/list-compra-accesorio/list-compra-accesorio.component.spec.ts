import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompraAccesorioComponent } from './list-compra-accesorio.component';

describe('ListCompraAccesorioComponent', () => {
  let component: ListCompraAccesorioComponent;
  let fixture: ComponentFixture<ListCompraAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompraAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompraAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
