import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  template: `
    <select (change)="onSelect($event.target.value)">
      <option *ngFor="let item of menuItems" [value]="item">{{ item }}</option>
    </select>
  `
})
export class DropdownMenuComponent {
  @Output() itemSelected = new EventEmitter<string>();
  menuItems = ['Item 1', 'Item 2', 'Item 3'];

  onSelect(item: string) {
    this.itemSelected.emit(item);
  }
}
