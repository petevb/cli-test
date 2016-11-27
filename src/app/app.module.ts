import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { RepoService } from './services/repo.service';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { IssuesComponent } from './issues/issues.component';
import { RepoDetailResolveService } from './services/repo-detail-resolve.service';
import { SearchComponent } from './search/search.component';
import { RepoListComponent } from './repo-list/repo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    RepoDetailComponent,
    IssuesComponent,
    SearchComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/repo',
        pathMatch: 'full'
      }, {
        path: 'repo/:name',
        component: RepoComponent
      }, {
        path: 'repo',
        component: RepoComponent
      }, {
        path: 'repo-detail/:name/:id',
        component: RepoDetailComponent,
        resolve: {
          repo: RepoDetailResolveService
        }  
      },
    ])
  ],
  providers: [
    RepoService,
    RepoDetailResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
