import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminadosFechasComponent } from './terminados-fechas.component';

describe('TerminadosFechasComponent', () => {
  let component: TerminadosFechasComponent;
  let fixture: ComponentFixture<TerminadosFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminadosFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminadosFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
