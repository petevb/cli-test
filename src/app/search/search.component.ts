import { Component, Input, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

}
