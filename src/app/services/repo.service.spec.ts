/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { RepoService } from './repo.service';

describe('RepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
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
