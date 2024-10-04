import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <div>
      <p>{{ task.name }}</p>
      <button (click)="deleteTask()">Delete</button>
    </div>
  `
})
export class TodoItemComponent {
  @Input() task: { name: string };
  @Output() taskDeleted = new EventEmitter<void>();

  deleteTask() {
    this.taskDeleted.emit();
  }
}
