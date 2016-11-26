import { Injectable } from '@angular/core';
// TODO: Consume the ones after Http.
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IssuesService {

  constructor(private http: Http) { }

  public getIssues(fullName: string): Promise</*Issues[]*/ any> {
    const url = `https://api.github.com/search/issues?q=repo:${fullName}`;
    return this.http.get(url)
      .map(response => response.json().items)
      .toPromise();
  }
}
