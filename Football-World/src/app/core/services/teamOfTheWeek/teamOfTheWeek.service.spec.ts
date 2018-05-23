import { TestBed, inject } from '@angular/core/testing';

import { TeamOfTheWeekService } from './teamOfTheWeek.service';

describe('TeamOfTheWeekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamOfTheWeekService]
    });
  });

  it('should be created', inject([TeamOfTheWeekService], (service: TeamOfTheWeekService) => {
    expect(service).toBeTruthy();
  }));
});