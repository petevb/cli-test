/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { RepoComponent } from './repo.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { SearchComponent } from '../search/search.component';

describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RepoComponent,
        RepoListComponent,
        SearchComponent
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
