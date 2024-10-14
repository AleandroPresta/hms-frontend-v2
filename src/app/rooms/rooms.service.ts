import { Injectable } from '@angular/core';
import { Room } from './Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  mockRooms: Room[] = [
    {
      id: 1,
      name: 'Andromeda Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Galaxy Wing',
      images: ['https://as1.ftcdn.net/v2/jpg/07/18/34/12/1000_F_718341271_Tj7ogv19OUVfpBmRKMhUv6buRrOTx0L6.jpg'],
      size: 100,
      features: ['King Bed', 'Galaxy View', 'Mini Bar'],
      bookings: [
        {
          id: 1,
          roomId: 1,
          startDate: new Date('2023-10-01T14:00:00'),
          endDate: new Date('2023-10-05T11:00:00')
        },
        {
          id: 7,
          roomId: 1,
          startDate: new Date('2023-10-10T14:00:00'),
          endDate: new Date('2023-10-15T11:00:00')
        }
      ],
      price: 200,
      rating: 4.3
    },
    {
      id: 1,
      name: 'Andromeda Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Galaxy Wing',
      images: ['https://as1.ftcdn.net/v2/jpg/07/18/34/12/1000_F_718341271_Tj7ogv19OUVfpBmRKMhUv6buRrOTx0L6.jpg'],
      size: 100,
      features: ['King Bed', 'Galaxy View', 'Mini Bar'],
      bookings: [
        {
          id: 1,
          roomId: 1,
          startDate: new Date('2023-10-01T14:00:00'),
          endDate: new Date('2023-10-05T11:00:00')
        },
        {
          id: 7,
          roomId: 1,
          startDate: new Date('2023-10-10T14:00:00'),
          endDate: new Date('2023-10-15T11:00:00')
        }
      ],
      price: 300,
      rating: 4.2
    },
    {
      id: 1,
      name: 'Andromeda Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Galaxy Wing',
      images: ['https://as1.ftcdn.net/v2/jpg/07/18/34/12/1000_F_718341271_Tj7ogv19OUVfpBmRKMhUv6buRrOTx0L6.jpg'],
      size: 100,
      features: ['King Bed', 'Galaxy View', 'Mini Bar'],
      bookings: [
        {
          id: 1,
          roomId: 1,
          startDate: new Date('2023-10-01T14:00:00'),
          endDate: new Date('2023-10-05T11:00:00')
        },
        {
          id: 7,
          roomId: 1,
          startDate: new Date('2023-10-10T14:00:00'),
          endDate: new Date('2023-10-15T11:00:00')
        }
      ],
      price: 300,
      rating: 5
    },
    {
      id: 1,
      name: 'Andromeda Suite',
      type: 'Suite',
      capacity: 3,
      location: 'Galaxy Wing',
      images: ['https://as1.ftcdn.net/v2/jpg/07/18/34/12/1000_F_718341271_Tj7ogv19OUVfpBmRKMhUv6buRrOTx0L6.jpg'],
      size: 100,
      features: ['King Bed', 'Galaxy View', 'Mini Bar'],
      bookings: [
        {
          id: 1,
          roomId: 1,
          startDate: new Date('2023-10-01T14:00:00'),
          endDate: new Date('2023-10-05T11:00:00')
        },
        {
          id: 7,
          roomId: 1,
          startDate: new Date('2023-10-10T14:00:00'),
          endDate: new Date('2023-10-15T11:00:00')
        }
      ],
      price: 300,
      rating: 1
    }

  ];

  getRooms(): Room[] {
    return this.mockRooms;
  }
}
