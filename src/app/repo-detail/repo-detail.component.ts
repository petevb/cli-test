import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { RepoModel } from '../models/repo.model';
import { RepoService } from '../services/repo.service';
//import { IssuesService } from '../services/issues.service';
import { IssuesComponent } from '../issues/issues.component';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css'],
  providers: [
    RepoService
  ]
})
export class RepoDetailComponent implements OnInit {
  //@Input()
  repo: RepoModel;

  constructor(
    private repoService: RepoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const name: string = this.route.params['name'];
    console.log(`RepoDetail.ngOnInit ${name}`);

    this.route.data
      .subscribe((data: {repo: RepoModel}) => {
        console.log(data.repo);
        this.repo = data.repo;
      });

    // this.route.params
    //   .switchMap((params: Params) => this.repoService.getRepo(+params['id']))
    //   .subscribe(repo => {
    //     console.log(repo);
    //     this.repo = repo;
    //   });
  }

  goBack(): void {
    this.location.back();
  }
}
