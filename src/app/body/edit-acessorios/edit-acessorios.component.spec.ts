import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcessoriosComponent } from './edit-acessorios.component';

describe('EditAcessoriosComponent', () => {
  let component: EditAcessoriosComponent;
  let fixture: ComponentFixture<EditAcessoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcessoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
