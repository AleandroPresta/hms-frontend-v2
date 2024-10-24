import { Component, Input } from '@angular/core';
import { Room, Booking } from '../Room';
import { RoomsSearchComponent } from '../rooms-search/rooms-search.component';
import { RoomPreviewComponent } from "../room-preview/room-preview.component";
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RoomFilterComponent } from "./room-filter/room-filter.component";

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [
    RoomsSearchComponent,
    RoomPreviewComponent,
    NgFor, NgClass,
    RouterLink,
    RoomFilterComponent
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {
  @Input() roomList: Room[] = [];
  private originalRoomList: Room[] = [];
  filteredRoomList: Room[] = [];

  ngOnChanges() {
    this.originalRoomList = [...this.roomList];
    this.filteredRoomList = [...this.roomList];
  }

  applyFilters(filters: any) {
    console.log('Applying filters:', filters);
    // Start with the original list
    this.filteredRoomList = this.originalRoomList.filter(room => {
      // Type filter
      if (filters.type && room.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }

      // Capacity filter
      if (filters.capacity && room.capacity < parseInt(filters.capacity)) {
        return false;
      }

      // Location filter
      if (filters.location) {
        const locationMatch = room.location.toLowerCase().includes(filters.location.toLowerCase());
        if (!locationMatch) return false;
      }

      // Price range filter
      if (filters.priceRange) {
        switch (filters.priceRange) {
          case 'budget':
            if (room.price > 100) return false;
            break;
          case 'mid':
            if (room.price <= 100 || room.price > 200) return false;
            break;
          case 'luxury':
            if (room.price <= 200) return false;
            break;
        }
      }

      // Rating filter
      if (filters.minRating && room.rating < parseFloat(filters.minRating)) {
        return false;
      }

      // Size filter
      if (filters.size) {
        switch (filters.size) {
          case 'small':
            if (room.size >= 30) return false;
            break;
          case 'medium':
            if (room.size < 30 || room.size > 50) return false;
            break;
          case 'large':
            if (room.size <= 50) return false;
            break;
        }
      }

      return true;
    });

    // Update the roomList to show filtered results
    this.roomList = this.filteredRoomList;
  }
}