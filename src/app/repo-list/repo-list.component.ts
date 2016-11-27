import { Component, Input, OnInit } from '@angular/core';
// Don't do this in production - all of RxJS is big.
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

//import { RepoDetailComponent  } from '../repo-detail/repo-detail.component';
import { RepoService } from '../services/repo.service';
import { RepoModel } from '../models/repo.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  providers: [RepoService]
})
export class RepoListComponent {
  selectedRepo: RepoModel;
  private title: string = 'RepoComponent';
  private searchTerm: string;
  private totalCount: number;
  // API maxes out at 1000 search results. Don't let the pagination try to go beyond that.
  private totalCountForPagination: number;
  private showResults: boolean = false;
  public currentPage: number = 1;
  public maxSize: number = 10;

  @Input()
  public repos: RepoModel[];
  private waiting: boolean = false;

  constructor(
    private router: Router,
    private repoService: RepoService
  ) { }

  public setPage(value: number): void {
    console.log(`RepoListComponent.setPage: ${value}`);
    if (value !== this.currentPage) {
      this.currentPage = value;
      this.getRepos();
    }
  };

  public pageChanged(event: any): void {
    console.log(`RepoListComponent.Page changed to: ${event.page}`);
    // We should probably observe the page instead. 
    if (event.page !== this.currentPage) {
      this.currentPage = event.page;
      this.getRepos();
    }
  };

  public onSearchChanged(value: string) {
    if (value !== this.searchTerm) {
      this.searchTerm = value;
      this.getRepos();
    }
  }

  public getRepos(): void {
    this.waiting = true;
    this.showResults = false;
    console.log(`RepoListComponent.searching for ${this.searchTerm}, page ${this.currentPage} ...`);
    
    this.repoService.search(this.searchTerm, this.currentPage)
      .subscribe(data => {
        this.totalCount = data.totalCount;
        this.totalCountForPagination = (data.totalCount > 1000) ? 1000 : data.totalCount;
        this.repos = data.items;

        // Make these computed so that it updates when the observable refreshes?
        this.waiting = false;
        this.showResults = true;
      },
      error => {
        // TODO: Tell user, don't log to console.
        console.warn(error);
      });
  }

  public onSelect(repo: RepoModel): boolean {
    console.log(`RepoListComponent.RepoListComponent.onSelect ${repo.id}`);
    this.selectedRepo = repo;
    this.router.navigate(['/repo-detail', this.selectedRepo.owner.login, this.selectedRepo.name]);
    return false;
  }
}
