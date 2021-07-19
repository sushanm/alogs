import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSalaryParentComponent } from './manager-salary-parent.component';

describe('ManagerSalaryParentComponent', () => {
  let component: ManagerSalaryParentComponent;
  let fixture: ComponentFixture<ManagerSalaryParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerSalaryParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSalaryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
