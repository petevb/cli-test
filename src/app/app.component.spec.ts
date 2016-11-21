/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  const title = "GitHub API";
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RepoComponent
      ],
    }); //.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(app.title).toEqual(title);
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    let nativeElement = fixture.debugElement.nativeElement;

    // TODO pick one of these approaches:

    expect(nativeElement.querySelector('h1').textContent).toContain(title);
    
    expect(nativeElement.textContent).toContain(title);

    const h1 = nativeElement;
    expect(h1.innerText).toMatch(/github/i,
      `<h1> should say something about "${title}"`);
  });
});
