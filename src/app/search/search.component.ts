import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  @Input()  searchTerm: string;
  @Output() onSearchChanged = new EventEmitter<string>();

  search(value:string) {
    this.update(value);
    this.notify();
  }

  notify() {
    this.onSearchChanged.emit(this.searchTerm);
  }

  update(value: string) {
    this.searchTerm = value;
  }
}
