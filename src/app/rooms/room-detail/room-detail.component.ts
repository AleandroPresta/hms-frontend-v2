import { Component, OnInit } from '@angular/core';
import { Room } from '../Room';
import { GalleriaModule } from 'primeng/galleria';

interface GalleriaItem {
  itemImageSrc: string;
  thumbnailImageSrc: string;
}

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    GalleriaModule
  ],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css',
})
export class RoomDetailComponent implements OnInit {
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

  galleryImages: GalleriaItem[] = [];

  ngOnInit(): void {
    this.galleryImages = this.room.images.map(
      (imageUrl) => ({
        itemImageSrc: imageUrl,
        thumbnailImageSrc: imageUrl,
      })
    );
  }

  onActiveIndexChange(index: number) {
    console.log('Active image changed:', this.galleryImages[index]);
    // You can perform any action here when the active index changes
  }
}