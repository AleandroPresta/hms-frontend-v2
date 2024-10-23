import { Component } from '@angular/core';
import { AdminLoginFormComponent } from "./admin-login-form/admin-login-form.component";
import { NgIf } from '@angular/common';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

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

  showComponent(componentName: string) {
    this.componentToShow = componentName
  }

}
