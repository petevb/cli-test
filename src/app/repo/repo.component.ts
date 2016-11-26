import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  private showResults: boolean;

  onSearchChanged(value: string) {
    console.log(`RepoComponent.onSearchChanged ${value}`); 
    this.showResults = !!value; 
  }

  constructor() { }

  ngOnInit() {
  }
}
