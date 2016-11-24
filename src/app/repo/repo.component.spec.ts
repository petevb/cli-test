/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RepoComponent } from './repo.component';
import { RepoService } from './repo.service';


describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;
  let repoServiceStub = {};


  beforeEach(() => {
    repoServiceStub = {
      search() {
        return [];
      }
    };

    TestBed.configureTestingModule({
      declarations: [ RepoComponent ],
      imports: [
        HttpModule
      ],
      providers: [ {provide: RepoService, useValue: repoServiceStub} ]
    });
    //.compileComponents();

    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    repoServiceStub = fixture.debugElement.injector.get(RepoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
