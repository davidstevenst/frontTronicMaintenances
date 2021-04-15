import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarEntregaComponent } from './programar-entrega.component';

describe('ProgramarEntregaComponent', () => {
  let component: ProgramarEntregaComponent;
  let fixture: ComponentFixture<ProgramarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramarEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
