import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistProcesosFechasComponent } from './hist-procesos-fechas.component';

describe('HistProcesosFechasComponent', () => {
  let component: HistProcesosFechasComponent;
  let fixture: ComponentFixture<HistProcesosFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistProcesosFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistProcesosFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
