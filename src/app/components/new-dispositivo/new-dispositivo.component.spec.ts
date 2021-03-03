import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDispositivoComponent } from './new-dispositivo.component';

describe('NewDispositivoComponent', () => {
  let component: NewDispositivoComponent;
  let fixture: ComponentFixture<NewDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDispositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
