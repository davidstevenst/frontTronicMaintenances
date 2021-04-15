import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarEntregaComponent } from './confirmar-entrega.component';

describe('ConfirmarEntregaComponent', () => {
  let component: ConfirmarEntregaComponent;
  let fixture: ComponentFixture<ConfirmarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
