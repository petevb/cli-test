/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { TimeAgoPipe } from 'angular2-moment';

import { IssuesComponent } from './issues.component';
import { IssuesService } from '../services/issues.service';


describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;
  let issuesServiceStub;

  beforeEach(async(() => {
    issuesServiceStub = {
      getIssues: () => {
        return {
          fullName: 'fred'
        };
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        IssuesComponent
      ],
      imports: [
        HttpModule,
        MomentModule
      ],
      providers: [
        { provide: IssuesService, useValue: issuesServiceStub },
        { provide: MomentModule, useValue: TimeAgoPipe }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    issuesServiceStub = fixture.debugElement.injector.get(IssuesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
