import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './admin-login-form.component.html',
  styleUrl: './admin-login-form.component.css'
})
export class AdminLoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  @Input() incorrectUsernameOrPassword: boolean = false;

  username: string = "";
  password: string = "";

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({ "username": this.username, "password": this.password });
  }

}
