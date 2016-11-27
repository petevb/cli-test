import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()  searchTerm: string = '';
  @Output() onSearchChanged = new EventEmitter<string>();

  search(value:string) {
    console.log(`Search.search(${value})`);
    this.update(value);
    this.notify();
  }

  notify() {
    console.log(`Search.notify()`);
    this.onSearchChanged.emit(this.searchTerm);
  }

  update(value: string) {
    console.log(`Search.update(${value})`);
    this.searchTerm = value;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const name: string = this.route.snapshot.params['name'];
    console.log(`Search.ngOnInit: name = '${name}'`);
    if (name) {
      this.search(name);
    }
  }

}
