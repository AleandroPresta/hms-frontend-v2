import { Component } from '@angular/core';
import { RoomsFooterComponent } from '../../rooms/rooms-footer/rooms-footer.component';
import { RoomsHeaderComponent } from '../../rooms/rooms-header/rooms-header.component';
import { RouterOutlet } from '@angular/router';
import { AuthFormsComponent } from "../auth-forms/auth-forms.component";
import { NgClass, NgIf } from '@angular/common';
import { UserPageComponent } from "../user-page/user-page.component";
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
    FormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string = "auth";
  incorrectUsernameOrPassword: boolean = false;
  userAlreadyExists: boolean = false;

  firstName: string = "";
  lastName: string = "";
  username: string = "";

  constructor(private authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.checkLoginState();
  }

  checkLoginState(): void {
    if (this.authService.isLoggedIn()) {
      const user = this.authService.getLoggedInUser();
      if (user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.componentToShow = 'user-page';
      }
    }
  }

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
    }
  }

  onRegister(input: any): void {
    const user = this.authService.registerUser(input);
    if (user == null) {
      this.userAlreadyExists = true;
      this.componentToShow = 'auth';
    }
  }

  onLogout(): void {
    this.authService.logoutUser();
    this.componentToShow = 'auth';
    this.firstName = "";
    this.lastName = "";
    this.username = "";
  }

  showSuccess(severity: string, summary: string, detail: string) {
    this.messageService.add(
      {
        severity: severity,
        summary: summary,
        detail: detail,
      }
    );
  }

}
