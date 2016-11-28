import { Component } from '@angular/core';

/**
 * Holds the router-outlet to render the appropriate component.
 * 
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly title = 'GitHub API in Angular 2';
}
