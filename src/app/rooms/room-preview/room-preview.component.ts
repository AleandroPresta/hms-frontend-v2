import { Component, Input } from '@angular/core';
import { Room } from '../Room';

@Component({
  selector: 'app-room-preview',
  standalone: true,
  imports: [],
  templateUrl: './room-preview.component.html',
  styleUrl: './room-preview.component.css'
})
export class RoomPreviewComponent {

  @Input() room: Room = {
    id: 0,
    name: '',
    type: '',
    capacity: 0,
    location: '',
    images: [],
    size: 0,
    features: [],
    bookings: []
  };

  constructor() {
    console.log(this.room);
  }

}
