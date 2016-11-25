import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { RepoService } from '../repo/repo.service';
import { Repo } from '../repo/repo';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css'],
  providers: [RepoService]
})
export class RepoDetailComponent implements OnInit {
  @Input()
  repo: Repo;
  issues: any[];

  constructor(
    private repoService: RepoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.repoService.getRepo(+params['id']))
      .subscribe(repo => {
        console.log(repo);
        this.repo = repo;
        this.repoService.getIssues(repo.fullName).then(
          issues => this.issues = issues
        );
      });
  }

  goBack(): void {
    this.location.back();
  }
}
