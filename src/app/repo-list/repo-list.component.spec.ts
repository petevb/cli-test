/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { RepoListComponent } from './repo-list.component';
import { RepoService } from '../services/repo.service';
import { RepoDetailComponent  } from '../repo-detail/repo-detail.component';
import { IssuesComponent } from '../issues/issues.component';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let repoServiceStub = {};


  beforeEach(async(() => {
    repoServiceStub = {
      search() {
        return [];
      }
    };

    TestBed.configureTestingModule({
      declarations: [ 
        RepoListComponent,
        RepoDetailComponent,
        IssuesComponent 
      ],
      imports: [
        HttpModule
      ],
      providers: [ 
        { provide: RepoService, useValue: repoServiceStub }, 
        { provide: Router, useValue: RouterStub } 
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    repoServiceStub = fixture.debugElement.injector.get(RepoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
