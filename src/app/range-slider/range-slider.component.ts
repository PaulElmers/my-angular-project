import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  template: `<input type="range" (input)="onRangeChange($event.target.value)">`
})
export class RangeSliderComponent {
  @Output() valueChange = new EventEmitter<number>();

  onRangeChange(value: number) {
    this.valueChange.emit(value);
  }
}
