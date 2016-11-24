import { Injectable } from '@angular/core';
// TODO: Consume the ones after Http.
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Repo } from './repo';
import { ReposMock } from './repo-mock';

@Injectable()
export class RepoService {
  constructor (private http: Http) {

  }

  public getRepos(): Promise<Repo[]> {
    return ReposMock.getData();
  } 

  public search(name: string) {
    let url = `https://api.github.com/search/repositories?q=${name}`;

    // using fetch api something like:
    // fetch(url).then(response => response.json());
    return this.http.get(url)
      .map(response => response.json().items)
      .toPromise()
      .catch(e => {
        console.warn(e);
        return Promise.reject(e);
      });
  }


  public searchObservable(name: string) {
    let url = `https://api.github.com/search/repositories?q=${name}`;

    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  /**
   * log to the console for now (likely server later)
   * and then let rxjs continue.
   */
  private handleError(e: any) {
    console.warn(e);
    return Observable.throw(e);
  }
}
