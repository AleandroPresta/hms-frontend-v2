import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-forms',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './auth-forms.component.html',
  styleUrl: './auth-forms.component.css'
})
export class AuthFormsComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  @Input() active: string = "login";
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  password: string = "";

  onSubmitLogin() {
    console.log("onSubmitLogin");
    console.table({ "login": this.username, "password": this.password });
    // this.onSubmitLoginEvent.emit({ "login": this.username, "password": this.password });
  }

  onSubmitRegister() {
    console.log("onSubmitRegister");
    console.table({ "firstName": this.firstName, "lastName": this.lastName, "login": this.username, "password": this.password });
    // this.onSubmitRegisterEvent.emit({ "firstName": this.firstName, "lastName": this.lastName, "login": this.username, "password": this.password });
  }

  setActive(active: string) {
    this.active = active;
  }

}
