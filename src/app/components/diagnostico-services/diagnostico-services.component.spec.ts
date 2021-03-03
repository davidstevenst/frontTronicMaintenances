import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoServicesComponent } from './diagnostico-services.component';

describe('DiagnosticoServicesComponent', () => {
  let component: DiagnosticoServicesComponent;
  let fixture: ComponentFixture<DiagnosticoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
