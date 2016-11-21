/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepoService } from './repo.service';

describe('RepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoService]
    });
  });

  it('should ...', inject([RepoService], (service: RepoService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a get method to return all repos from the service', inject([RepoService], (service: RepoService) => {
    expect(service.getRepos).toBeTruthy();
  }));

});
