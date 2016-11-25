import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { RepoService } from './repo/repo.service';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
