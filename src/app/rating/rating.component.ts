import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="stars">
      <span *ngFor="let star of stars">&#9733;</span>
    </div>
  `,
  styles: [`
    .stars {
      color: gold;
    }
  `]
})
export class RatingComponent {
  @Input() rating: number;
  stars: number[] = [];

  ngOnChanges() {
    this.stars = Array(this.rating).fill(0);
  }
}
