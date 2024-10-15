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
      'https://picsum.photos/seed/pulsar1/600/600',
      'https://picsum.photos/seed/pulsar2/600/600',
      'https://picsum.photos/seed/pulsar3/600/600',
      'https://picsum.photos/seed/pulsar4/600/600',
      'https://picsum.photos/seed/pulsar5/600/600',
      'https://picsum.photos/seed/pulsar6/600/600',
      'https://picsum.photos/seed/pulsar7/600/600',
      'https://picsum.photos/seed/pulsar8/600/600',
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