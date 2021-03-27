import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGerenteComponent } from './new-gerente.component';

describe('NewGerenteComponent', () => {
  let component: NewGerenteComponent;
  let fixture: ComponentFixture<NewGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
