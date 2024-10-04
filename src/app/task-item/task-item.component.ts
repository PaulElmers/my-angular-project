import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
    <div [class.completed]="status === 'completed'">
      <p>{{ task.name }} - {{ status === 'completed' ? 'Завершено' : 'В процесі' }}</p>
    </div>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `]
})
export class TaskItemComponent {
  @Input() task: { name: string };
  @Input() status: 'completed' | 'in-progress';
}
