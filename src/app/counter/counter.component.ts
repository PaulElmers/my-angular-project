import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increase()">Increase</button>
    <p>Counter: {{ count }}</p>
  `
})
export class CounterComponent {
  count = 0;
  @Output() countChanged = new EventEmitter<number>();

  increase() {
    this.count++;
    this.countChanged.emit(this.count);
  }
}
