/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
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

  it(`should have as title 'app works!'`, () => {
    expect(app.title).toEqual('app works!');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    let nativeElement = fixture.debugElement.nativeElement;

    // TODO pick one of these approaches:

    expect(nativeElement.querySelector('h1').textContent).toContain('app works!');
    
    expect(nativeElement.textContent).toContain('app works!');

    const h1 = nativeElement;
    expect(h1.innerText).toMatch(/app works/i,
      '<h1> should say something about "App Works"');
  });
});
