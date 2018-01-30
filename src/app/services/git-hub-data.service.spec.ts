import { TestBed, inject } from '@angular/core/testing';

import { GitHubDataService } from './git-hub-data.service';

describe('GitHubDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubDataService]
    });
  });

  it('should be created', inject([GitHubDataService], (service: GitHubDataService) => {
    expect(service).toBeTruthy();
  }));
});
