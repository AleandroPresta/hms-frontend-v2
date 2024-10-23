import { Component, OnInit } from '@angular/core';
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
export class AdminComponent implements OnInit {

  componentToShow: string = 'auth';
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
        this.id = user.id;
        this.role = user.role;
        this.componentToShow = 'dashboard';
      }
      // If the user is not an admin, we log them out and show the auth panel
      if (user.role != 'admin') {
        this.authService.logoutUser();
        this.notAdmin = true;
        this.componentToShow = 'auth';
        return;
      }
    }
  }

  onLogin(input: any): void {
    // Get the user
    const user = this.authService.loginUser(input);
    // Check if the user exists
    if (user != null) {
      // Only admins can access the admin-dashboard
      if (user.role != 'admin') {
        this.notAdmin = true;
        this.componentToShow = 'auth';
        return;
      }
      // If the user is an admin
      this.incorrectUsernameOrPassword = false;
      this.notAdmin = false;
      this.componentToShow = 'dashboard';

      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;
      this.id = user.id;
      this.role = user.role;
    } else { // If the user does not exist
      this.incorrectUsernameOrPassword = true;
      this.componentToShow = 'auth';
    }
  }

}
