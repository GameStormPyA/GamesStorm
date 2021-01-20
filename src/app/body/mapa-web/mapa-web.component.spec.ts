import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaWebComponent } from './mapa-web.component';

describe('MapaWebComponent', () => {
  let component: MapaWebComponent;
  let fixture: ComponentFixture<MapaWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
