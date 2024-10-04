import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  template: `
    <div class="modal">
      <button (click)="close()">Close</button>
    </div>
  `
})
export class ModalWindowComponent {
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
