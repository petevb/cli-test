/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Http } from '@angular/http';
import {
  HttpModule, XHRBackend, Response, ResponseOptions
} from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

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
        RepoComponent,
        RepoDetailComponent,
        RepoListComponent,
        SearchComponent
      ],
      imports: [
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

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let nativeElement = fixture.debugElement.nativeElement;

    // TODO pick one of these approaches:

    expect(nativeElement.querySelector('h1').textContent).toContain(title);
    
    expect(nativeElement.textContent).toContain(title);

    const h1 = nativeElement;
    expect(h1.innerText).toMatch(/github/i,
      `<h1> should say something about "${title}"`);
  }));
});
