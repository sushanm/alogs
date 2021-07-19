import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySalaryParentComponent } from './monthly-salary-parent.component';

describe('MonthlySalaryParentComponent', () => {
  let component: MonthlySalaryParentComponent;
  let fixture: ComponentFixture<MonthlySalaryParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySalaryParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySalaryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
