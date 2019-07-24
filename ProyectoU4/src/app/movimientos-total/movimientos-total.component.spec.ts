import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosTotalComponent } from './movimientos-total.component';

describe('MovimientosTotalComponent', () => {
  let component: MovimientosTotalComponent;
  let fixture: ComponentFixture<MovimientosTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
