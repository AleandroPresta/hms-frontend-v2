import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../../rooms/rooms.service';
import { Room } from '../../rooms/Room';
import { AdminRoomPreviewComponent } from "../admin-room-preview/admin-room-preview.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AdminRoomPreviewComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoom: Room | null = null;
  isSidebarOpen = false;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.rooms = this.roomsService.getRooms();
    // On larger screens, show sidebar by default
    this.isSidebarOpen = window.innerWidth >= 992;
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
    // On mobile, hide sidebar after selection
    if (window.innerWidth < 992) {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}