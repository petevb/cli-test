import { Component, OnInit } from '@angular/core';
// Don't do this in production - all of RxJS is big.
import { Observable } from 'rxjs/Rx';
import { Router }   from '@angular/router';

//import { RepoDetailComponent  } from '../repo-detail/repo-detail.component';
import { RepoService } from '../services/repo.service';
import { RepoModel } from '../models/repo.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  providers: [RepoService]
})
export class RepoListComponent implements OnInit {
  selectedRepo: RepoModel;
  private title: string = 'RepoComponent';
  private total_count: number;
  private repos: RepoModel[];
  private waiting: boolean = true;

  constructor(
    private router: Router,
    private repoService: RepoService) { }

  public getRepos(): void {
    //this.repoService.getRepos().then(r => this.repos = r);
    //this.repos = this.repoService.search("foo").then(r => this.repos = r);
    this.repoService.searchObservable('typescript')
      .subscribe(
        data => {
          console.warn(`total count = ${data.total_count}`);
          this.total_count = data.total_count;
          this.repos = data.items;
          // Make this computed so that it updates when the observable refreshes?
          this.waiting = false;
        },
        error => {
          // TODO: Tell user, don't log to console.
          console.warn(error);
        }
      );
  }

  search(name) {

  }

  ngOnInit() {
    this.getRepos();
  }

  public onSelect(repo: RepoModel): void {
    console.log('onSelect', repo);
    this.selectedRepo = repo;
    this.router.navigate(['/repo-detail', this.selectedRepo.id]);
  }
}
