import { Injectable } from '@angular/core';

import { Repo } from './repo';
import { ReposMock } from './repo-mock';

@Injectable()
export class RepoService {
  public getRepos(): Promise<Repo[]> {
    return ReposMock.getData();
  } 
}
