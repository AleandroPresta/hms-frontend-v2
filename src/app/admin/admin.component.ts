import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoadingComponent } from "./loading/loading.component";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgIf,
    AdminDashboardComponent,
    LoadingComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  componentToShow: string = 'loading';
  notAdmin = false;
  role: string | null = "";

  constructor(private authService: AuthService) { }

  showComponent(componentName: string) {
    this.componentToShow = componentName
  }

  ngOnInit(): void {
    this.showComponent('loading');
    // Get the role of the user from memory
    const user = this.authService.getLoggedInUser();
    this.role = user.role;

    // Manage the content to show based on the role
    this.manageContentToShow(this.role);

  }

  manageContentToShow(role: string | null): void {
    if (this.role != 'admin') {
      this.notAdmin = true;
      this.showComponent('not-admin')
    } else {
      this.showComponent('dashboard');
    }

  }

}
