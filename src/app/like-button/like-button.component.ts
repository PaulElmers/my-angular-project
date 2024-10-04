import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: `<button (click)="like()">Like</button>`
})
export class LikeButtonComponent {
  @Output() liked = new EventEmitter<void>();

  like() {
    this.liked.emit();
  }
}
