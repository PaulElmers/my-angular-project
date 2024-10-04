import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating-selector',
  template: `
    <select (change)="selectRating($event.target.value)">
      <option *ngFor="let rating of [1, 2, 3, 4, 5]" [value]="rating">{{ rating }}</option>
    </select>
  `
})
export class RatingSelectorComponent {
  @Output() ratingSelected = new EventEmitter<number>();

  selectRating(rating: number) {
    this.ratingSelected.emit(rating);
  }
}
