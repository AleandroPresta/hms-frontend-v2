import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-forms',
  standalone: true,
  imports: [
    FormsModule,
    NgClass, NgIf,
    JsonPipe
  ],
  templateUrl: './auth-forms.component.html',
  styleUrl: './auth-forms.component.css'
})
export class AuthFormsComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  password: string = "";

  @Input() incorrectUsernameOrPassword: boolean = false;

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({ "username": this.username, "password": this.password });
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({ "firstName": this.firstName, "lastName": this.lastName, "username": this.username, "password": this.password });
  }

  setActive(active: string) {
    this.active = active;
  }

}
