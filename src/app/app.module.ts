import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { RepoService } from './repo/repo.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
