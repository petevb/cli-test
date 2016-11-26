/* tslint:disable:no-unused-variable */
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { TestBed, async, inject } from '@angular/core/testing';
import { RepoDetailResolveService } from './repo-detail-resolve.service';
import { RepoService } from './repo.service';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('RepoDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        RepoDetailResolveService,
        RepoService, 
        { provide: Router, useValue: RouterStub } 
      ]
    });
  });

  it('should ...', inject([RepoDetailResolveService], (service: RepoDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
