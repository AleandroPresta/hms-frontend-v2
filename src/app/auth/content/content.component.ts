import { Component } from '@angular/core';
import { RoomsFooterComponent } from '../../rooms/rooms-footer/rooms-footer.component';
import { RoomsHeaderComponent } from '../../rooms/rooms-header/rooms-header.component';
import { RouterOutlet } from '@angular/router';
import { AuthFormsComponent } from "../auth-forms/auth-forms.component";
import { NgClass, NgIf } from '@angular/common';
import { UserPageComponent } from "../user-page/user-page.component";
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RoomsHeaderComponent,
    RoomsFooterComponent,
    RouterOutlet,
    AuthFormsComponent,
    NgClass, NgIf,
    UserPageComponent,
    FormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string = "auth";
  incorrectUsernameOrPassword: boolean = false;

  firstName: string = "";
  lastName: string = "";
  username: string = "";

  constructor(private authService: AuthService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    const user = this.authService.loginUser(input);
    if (user != null) {
      this.incorrectUsernameOrPassword = false;
      this.componentToShow = 'user-page';

      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;
    } else {
      this.incorrectUsernameOrPassword = true;
      this.componentToShow = 'auth';
      console.table(this.authService.mockUsers);
    }
  }

  onRegister(input: any): void {
    this.authService.registerUser(input);
  }

}
