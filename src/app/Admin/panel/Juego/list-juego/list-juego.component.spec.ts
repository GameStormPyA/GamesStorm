import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJuegoComponent } from './list-juego.component';

describe('ListJuegoComponent', () => {
  let component: ListJuegoComponent;
  let fixture: ComponentFixture<ListJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
