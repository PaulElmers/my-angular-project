import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  template: `<input type="file" (change)="onFileSelected($event)">`
})
export class FileUploaderComponent {
  @Output() fileUploaded = new EventEmitter<File>();

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.fileUploaded.emit(file);
    }
  }
}
