import { Component, Input } from '@angular/core';
import { Room } from '../Room';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-preview',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule
  ],
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
    bookings: [],
    price: 0,
    rating: 1
  };

  constructor() { }

}
