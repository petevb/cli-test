import { Component, OnInit } from '@angular/core';

import { RepoService } from './repo.service';
import { Repo } from './repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [RepoService]
})
export class RepoComponent implements OnInit {
  private title: string = "RepoComponent";
  private repos: Repo[];
  private selectedRepo: Repo;

  constructor(private repoService: RepoService) { }

  public getRepos(): void {
    this.repoService.getRepos().then(r => this.repos = r);
  }

  ngOnInit() {
    this.getRepos();
  }

  public onSelect(repo: Repo): void {
    this.selectedRepo = repo;
  }
}
