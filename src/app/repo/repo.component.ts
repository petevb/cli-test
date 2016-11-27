import { Component } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  private showResults: boolean;

  onSearchChanged(value: string) {
    console.log(`RepoComponent.onSearchChanged ${value}`);
    this.showResults = !!value;
  }

  constructor() { }
}
