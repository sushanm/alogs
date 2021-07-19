import { TestBed } from '@angular/core/testing';

import { ExternalAppsService } from './external-apps.service';

describe('ExternalAppsService', () => {
  let service: ExternalAppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalAppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
