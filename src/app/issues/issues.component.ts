import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IssuesService } from '../services/issues.service';
import { RepoModel } from '../models/repo.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [
    IssuesService,
  ]
})
export class IssuesComponent implements OnInit {
  @Input() repo: RepoModel;
  // TODO: issues model.
  issues: any[];

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    if (this.repo) {
      this.issuesService.getIssues(this.repo.fullName).then(
        issues => this.issues = issues
      );
    }
  }

}
