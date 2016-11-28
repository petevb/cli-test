import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IssueModel } from '../models/issue.model';

@Injectable()
export class IssuesService {

  constructor(private http: Http) { }

  /**
   * Get the issues for a given repo.
   * 
   * @param {string} fullName
   * @returns {Observable<IssueModel[]>}
   * 
   * @memberOf IssuesService
   */
  public getIssues(fullName: string): Observable<IssueModel[]> {
    // This is the URL suggested by the spec.
    ////const url = `https://api.github.com/search/issues?q=repo:${fullName}`;
    // ... but this seems "better".  For some definitions of "better" :)
    const url = `https://api.github.com/repos/${fullName}/issues`;
    
    return this.http.get(url)
      .map(response => response.json())
      .map(items => items.map(item => new IssueModel(item)))
  }
}
