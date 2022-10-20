import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTiempoComponent } from './detalles-tiempo.component';

describe('DetallesTiempoComponent', () => {
  let component: DetallesTiempoComponent;
  let fixture: ComponentFixture<DetallesTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
