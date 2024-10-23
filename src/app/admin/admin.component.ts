import { Component } from '@angular/core';
import { AdminLoginFormComponent } from "./admin-login-form/admin-login-form.component";
import { NgIf } from '@angular/common';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    AdminLoginFormComponent,
    NgIf,
    AdminDashboardComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  componentToShow = 'auth';
  incorrectUsernameOrPassword: Boolean = false;
  notAdmin = false;
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  id: number = 0;
  role: string = "";

  constructor(
    private authService: AuthService
  ) { }

  showComponent(componentName: string) {
    this.componentToShow = componentName
  }

  onLogin(input: any): void {
    const user = this.authService.loginUser(input);
    if (user != null) {
      // Only admins can access the admin-dashboard
      if (user.role != 'admin') {
        this.notAdmin = true;
        this.componentToShow = 'auth';
        return;
      }

      this.incorrectUsernameOrPassword = false;
      this.componentToShow = 'dashboard';

      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;
      this.id = user.id;
      this.role = user.role;
    } else {
      this.incorrectUsernameOrPassword = true;
      this.componentToShow = 'auth';
    }
  }

}
