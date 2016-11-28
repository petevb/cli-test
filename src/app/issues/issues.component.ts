import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IssuesService } from '../services/issues.service';
import { IssueModel } from '../models/issue.model';
import { RepoModel } from '../models/repo.model';

/**
 * Responsible for the list of issues.
 * 
 * TODO: Pagination. Also perhaps filtering like https://github.com/Microsoft/TypeScript/issues.
 * 
 * @export
 * @class IssuesComponent
 * @implements {OnInit}
 */
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
  issues: IssueModel[];

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    if (this.repo) {
      this.issuesService.getIssues(this.repo.fullName)
        .subscribe(issues  => this.issues = issues);
    }
  }
}
