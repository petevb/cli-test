/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Http } from '@angular/http';
import {
  HttpModule, XHRBackend, Response, ResponseOptions
} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { PaginationComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { IssuesComponent  } from './issues/issues.component';
import { RepoComponent } from './repo/repo.component';
import { RepoDetailComponent  } from './repo-detail/repo-detail.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { SearchComponent  } from './search/search.component';
import { RepoService } from './services/repo.service';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent

describe('AppComponent', () => {
  const title = "GitHub API";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        IssuesComponent,
        PaginationComponent,
        RepoComponent,
        RepoDetailComponent,
        RepoListComponent,
        SearchComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        RepoService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have the correct title', async(() => {
    expect(app.title).toEqual(title);
  }));

  it('should render title in an element', async(() => {
    fixture.detectChanges();
    let nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.textContent).toContain(title, `Element should say something about "${title}"`);
  }));
});
