import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly title = 'GitHub API';
  
  // TODO: get from config / package.json.
  public readonly version = "1.0.0";
}
