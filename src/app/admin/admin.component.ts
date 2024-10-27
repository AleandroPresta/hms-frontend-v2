import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgIf,
    AdminDashboardComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  componentToShow: string = 'loading';
  notAdmin = false;
  role: string = "";

  constructor() { }

  showComponent(componentName: string) {
    this.componentToShow = componentName
  }

  ngOnInit(): void {
    this.componentToShow = 'loading';
  }

}
