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
export class RepoListComponent implements OnInit {
  selectedRepo: RepoModel;
  private title: string = 'RepoComponent';
  private total_count: number;
  private searchTerm: string;
  private showResults: boolean = false;

  @Input()
  public repos: RepoModel[];
  private waiting: boolean = false;

  constructor(
    private router: Router,
    private repoService: RepoService
  ) { }

  public onSearchChanged(value: string) {
    this.showResults = false;
    if(value !== this.searchTerm) {
      this.searchTerm = value; 
      this.getRepos();
    }
  }

  public getRepos(): void {
    this.waiting = true;
    this.repoService.searchObservable(this.searchTerm)
      .subscribe(
      data => {
        console.warn(`total count = ${data.total_count}`);
        this.total_count = data.total_count;
        this.repos = data.items;
        // Make these computed so that it updates when the observable refreshes?
        this.waiting = false;
        this.showResults = true;
      },
      error => {
        // TODO: Tell user, don't log to console.
        console.warn(error);
      }
      );
  }

  public onSelect(repo: RepoModel): void {
    console.log('onSelect', repo);
    this.selectedRepo = repo;
    this.router.navigate(['/repo-detail', this.selectedRepo.name, this.selectedRepo.id]);
  }
}
