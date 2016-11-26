/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [IssuesService]
    });
  });

  it('should ...', inject([IssuesService], (service: IssuesService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a method to return all issues from the service', inject([IssuesService], (service: IssuesService) => {
    expect(service.getIssues).toBeTruthy();
  }));

});
