import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  template: `
    <div [ngClass]="alertType" class="alert">
      <p>{{ message }}</p>
    </div>
  `,
  styles: [`
    .alert {
      padding: 10px;
      border-radius: 5px;
    }
    .success { background-color: #d4edda; color: #155724; }
    .warning { background-color: #fff3cd; color: #856404; }
    .error { background-color: #f8d7da; color: #721c24; }
  `]
})
export class AlertBoxComponent {
  @Input() message: string;
  @Input() alertType: 'success' | 'warning' | 'error';
}
