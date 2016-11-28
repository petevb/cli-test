import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { RepoModel } from '../models/repo.model';
import { ReposMock } from './repo-mock';

@Injectable()
export class RepoService {
    term: string;

    constructor(private http: Http) { }

    /**
     * Returns mock data for test purposes.
     * 
     * This would be better as a subclass of RepoService,
     * e.g. create RepoServiceMock and override search
     * 
     * @returns {Promise<RepoModel[]>}
     * 
     * @memberOf RepoService
     */
    public getRepos(): Promise<RepoModel[]> {
        return ReposMock.getData();
    }

    /**
     * Search for a repository by name, starting at given page.
     * 
     * @param {string} name     The name to search.
     * @param {number} [page=1] Page of results you want.
     * @returns Observable Array of RepoModel
     * 
     * @memberOf RepoService
     */
    public search(name: string, page: number = 1) {
        if (!name) {
            throw new Error("name cannot be empty.");
        }
        const pageSize = 10;
        const url = `https://api.github.com/search/repositories?q=${name}&per_page=${pageSize}&page=${page}`;

         return this.http.get(url)
      .map(this.mapData)
      .catch(this.handleError);
  }

  private mapData(res: Response) {
    let body = res.json();
    let data = {
      items: body.items.map(item => new RepoModel(item)),
      totalCount: body.total_count
    }
    return data || {};
  }

    /**
     * Gets an individual Repository.
     * 
     * @param {string} owner of the repo 
     * @param {string} name of the repo
     * @returns {Promise<RepoModel>}
     * 
     * @memberOf RepoService
     */
    public getRepo(owner: string, name: string): Promise<RepoModel> {
        const url = `https://api.github.com/repos/${owner}/${name}`;
      
         return this.http.get(url)
            .map(response => response.json())
            .toPromise()
            .then(repo => new RepoModel(repo))
            .then(repo => {
              console.log(`RepoService for ${owner}/${name} got repo ${repo || "undefined"}`)
              return repo;
            })
            .catch(e => this.handleError);
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
