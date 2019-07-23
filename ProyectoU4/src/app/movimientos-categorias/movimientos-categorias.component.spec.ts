import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosCategoriasComponent } from './movimientos-categorias.component';

describe('MovimientosCategoriasComponent', () => {
  let component: MovimientosCategoriasComponent;
  let fixture: ComponentFixture<MovimientosCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
