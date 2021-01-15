import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComentarioAccesorioComponent } from './list-comentario-accesorio.component';

describe('ListComentarioAccesorioComponent', () => {
  let component: ListComentarioAccesorioComponent;
  let fixture: ComponentFixture<ListComentarioAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComentarioAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComentarioAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
