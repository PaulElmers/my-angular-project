import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="user-profile">
      <h2>{{ firstName }} {{ lastName }}</h2>
      <p>Age: {{ age }}</p>
    </div>
  `
})
export class UserProfileComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: number;
}
