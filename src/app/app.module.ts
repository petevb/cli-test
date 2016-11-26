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

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    RepoDetailComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/repo-list',
        pathMatch: 'full'
      }, {
        path: 'repo-list',
        component: RepoComponent
      },
      {
        path: 'detail/:id',
        component: RepoDetailComponent
      },
    ])
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
