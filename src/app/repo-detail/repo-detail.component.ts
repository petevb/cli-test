import { Component, OnInit, Input } from '@angular/core';

import { Repo } from '../repo/repo';
 
@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  @Input()
  repo: Repo;

  constructor() { }

  ngOnInit() {
  }

}
