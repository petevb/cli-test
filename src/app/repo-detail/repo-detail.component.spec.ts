/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RepoDetailComponent } from './repo-detail.component';
import { RepoService } from '../services/repo.service';
import { IssuesComponent } from '../issues/issues.component';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let repoServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RepoDetailComponent,
        IssuesComponent 
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [ 
        {provide: RepoService, useValue: repoServiceStub} 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    repoServiceStub = fixture.debugElement.injector.get(RepoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
