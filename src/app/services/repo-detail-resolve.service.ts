import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { RepoService } from './repo.service';
import { RepoModel } from '../models/repo.model';

/**
 * TODO: I think this might be unnecessary.
 * I was having trouble binding the issues list to repo-details
 * before the repo had been returned by its service.
 * 
 * This section of the Ng2 docs, ("Fetch data before navigating",
 * [https://angular.io/docs/ts/latest/guide/router.html#!#resolve-guard])
 * seemed to be just what was needed.  But suspect I was missing something!
 * 
 * @export
 * @class RepoDetailResolveService
 * @implements {Resolve<RepoModel>}
 */
@Injectable()
export class RepoDetailResolveService implements Resolve<RepoModel> {

  constructor(private repoService: RepoService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<RepoModel> | boolean {
    const id: number = +route.params['id'];

    console.log(`RepoDetailResolve[Service] got id:${id}`);

    //   .switchMap((params: Params) => this.repoService.getRepo(+params['id']))

    return this.repoService.getRepo(id).then(repo => {
      if (repo) {
        return repo;
      } else { // id not found
        debugger;
        this.router.navigate(['/repo-list']);
        return false;
      }
    });
  }
}
