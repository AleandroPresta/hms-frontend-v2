import { Component, OnInit } from '@angular/core';
import { Room } from '../Room';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaComponent } from '../../galleria/galleria.component';
import { RoomsHeaderComponent } from "../rooms-header/rooms-header.component";
import { RoomsFooterComponent } from "../rooms-footer/rooms-footer.component";

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    GalleriaModule,
    GalleriaComponent,
    RoomsHeaderComponent,
    RoomsFooterComponent
  ],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css',
})
export class RoomDetailComponent {
  constructor() { }

  room: Room = {
    id: 10,
    name: 'Pulsar Penthouse',
    type: 'Penthouse',
    capacity: 6,
    location: 'Pulsar Wing',
    images: [
      'https://picsum.photos/seed/pulsar1/400/400',
      'https://picsum.photos/seed/pulsar2/400/400',
      'https://picsum.photos/seed/pulsar3/400/400',
      'https://picsum.photos/seed/pulsar4/400/400',
      'https://picsum.photos/seed/pulsar5/400/400',
      'https://picsum.photos/seed/pulsar6/400/400',
      'https://picsum.photos/seed/pulsar7/400/400',
      'https://picsum.photos/seed/pulsar8/400/400',
    ],
    size: 150,
    features: ['Three King Beds', 'Pulsar View', 'Private Gym'],
    bookings: [
      {
        id: 11,
        roomId: 10,
        startDate: new Date('2023-12-10T14:00:00'),
        endDate: new Date('2023-12-15T11:00:00'),
      },
    ],
    price: 450,
    rating: 5,
  };

}