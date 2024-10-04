import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  template: `<img [src]="avatarUrl" alt="User Avatar" class="avatar">`,
  styles: [`
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  `]
})
export class UserAvatarComponent {
  @Input() avatarUrl: string;
}
