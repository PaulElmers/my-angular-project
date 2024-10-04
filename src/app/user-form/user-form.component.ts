import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
    <form (submit)="submitForm($event)">
      <input name="username" placeholder="Username">
      <input name="email" type="email" placeholder="Email">
      <button type="submit">Submit</button>
    </form>
  `
})
export class UserFormComponent {
  @Output() formSubmit = new EventEmitter<{ username: string, email: string }>();

  submitForm(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    this.formSubmit.emit({ username, email });
  }
}
