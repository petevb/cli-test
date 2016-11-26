import { Injectable } from '@angular/core';
// TODO: Consume the ones after Http.
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { RepoModel } from '../models/repo.model';
import { ReposMock } from './repo-mock';

@Injectable()
export class RepoService {
  term: string;

  constructor(private http: Http) { }

  public getRepos(): Promise<RepoModel[]> {
    return ReposMock.getData();
  }

  public search(name: string) {
    this.term = name;
    let url = `https://api.github.com/search/repositories?q=${name}&per_page=4`;

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
    if (!name) {
      throw new Error("name cannot be empty.");
    }
    
    let url = `https://api.github.com/search/repositories?q=${name}&per_page=4`;

    return this.http.get(url)
      .map(this.mapData)
      .catch(this.handleError);
  }

  private mapData(res: Response) {
    let body = res.json();
    let data = {
      items: body.items,
      total_count: body.total_count
    }
    return data || {};
  }

  public getRepo(name:string, id: number): Promise<RepoModel> {
    return this.search(name)
      .then(repos => repos.find(repo => repo.id === id))
      .then(repo => {
        console.log(`RepoService for id ${id} got repo ${repo || "undefined"}`);
        return {
          id: repo.id,
          fullName: repo.full_name,
          name: repo.name
        };
      });
  }

  /**
   * log to the console for now (likely server later)
   * and then let rxjs continue.
   */
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
