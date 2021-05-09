import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnmantenimientoComponent } from './enmantenimiento.component';

describe('EnmantenimientoComponent', () => {
  let component: EnmantenimientoComponent;
  let fixture: ComponentFixture<EnmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnmantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
