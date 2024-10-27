import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../../rooms/rooms.service';
import { Room } from '../../rooms/Room';
import { AdminRoomPreviewComponent } from "../admin-room-preview/admin-room-preview.component";
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, NgModel } from '@angular/forms';
import { RoomFilterService } from '../../rooms/rooms-list/room-filter.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AdminRoomPreviewComponent,
    FontAwesomeModule,
    FormsModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoom: Room | null = null;
  newName: string = '';
  newType: string = '';

  roomTypes: string[] = [];

  isSidebarOpen = false;

  faBars = faBars;
  faArrowLeft = faArrowLeft;

  constructor(private roomsService: RoomsService, private roomFilterService: RoomFilterService) { }

  ngOnInit(): void {
    this.rooms = this.roomsService.getRooms();
    // On larger screens, show sidebar by default
    this.isSidebarOpen = window.innerWidth >= 992;

    this.roomTypes = this.roomFilterService.getRoomTypes()
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
    // On mobile, hide sidebar after selection
    if (window.innerWidth < 992) {
      this.isSidebarOpen = false;
    }

    // Reset form
    this.newName = this.selectedRoom.name;
    this.newType = this.selectedRoom.type;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  submitRoom() {
    console.log('Room submitted');
    console.log(`id: ${this.selectedRoom?.id}`);
    console.log(`name: ${this.newName}`);
    console.log(`type: ${this.newType}`);
  }
}