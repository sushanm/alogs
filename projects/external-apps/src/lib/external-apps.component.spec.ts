import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAppsComponent } from './external-apps.component';

describe('ExternalAppsComponent', () => {
  let component: ExternalAppsComponent;
  let fixture: ComponentFixture<ExternalAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
