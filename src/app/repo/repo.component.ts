import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Rx';

import { RepoService } from './repo.service';
import { Repo } from './repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [RepoService]
})
export class RepoComponent implements OnInit {
  private title: string = 'RepoComponent';
  private repos: Promise<any[]>;
  private selectedRepo: Repo;

  constructor(public repoService: RepoService) { }

  public getRepos(): void {
    //this.repoService.getRepos().then(r => this.repos = r);
    //this.repos = this.repoService.search("foo").then(r => this.repos = r);
    this.repos = this.repoService.search('typescript')
      .catch(e => {
        // TODO: Tell user, don't log to console.
        console.warn(e);
        //return Observable.of(true);
      });
  }

  search(name) {

  }

  ngOnInit() {
    this.getRepos();
  }

  public onSelect(repo: Repo): void {
    console.warn('onSelect', repo);
    this.selectedRepo = repo;
  }
}
