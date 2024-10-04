import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
    <input [(ngModel)]="searchQuery" placeholder="Search...">
    <button (click)="search()">Search</button>
  `
})
export class SearchBoxComponent {
  @Output() searchQueryEvent = new EventEmitter<string>();
  searchQuery: string = '';

  search() {
    this.searchQueryEvent.emit(this.searchQuery);
  }
}
