import { Component, Input } from '@angular/core';
import { Room, Booking } from '../Room';
import { RoomsSearchComponent } from '../rooms-search/rooms-search.component';
import { RoomPreviewComponent } from "../room-preview/room-preview.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [
    RoomsSearchComponent,
    RoomPreviewComponent,
    NgFor, NgClass
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {

  @Input() roomList: Room[] = [];

  constructor() { }

}