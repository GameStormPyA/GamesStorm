import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompraJuegoComponent } from './list-compra-juego.component';

describe('ListCompraJuegoComponent', () => {
  let component: ListCompraJuegoComponent;
  let fixture: ComponentFixture<ListCompraJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompraJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompraJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
