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
      images: ['andromeda-suite1.jpg', 'andromeda-suite2.jpg'],
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
      ]
    },
    {
      id: 2,
      name: 'Orion Room',
      type: 'Deluxe',
      capacity: 2,
      location: 'Star Wing',
      images: ['orion-room1.jpg', 'orion-room2.jpg'],
      size: 50,
      features: ['Queen Bed', 'Star View', 'Wi-Fi'],
      bookings: [
        {
          id: 2,
          roomId: 2,
          startDate: new Date('2023-10-10T15:00:00'),
          endDate: new Date('2023-10-12T11:00:00')
        },
        {
          id: 8,
          roomId: 2,
          startDate: new Date('2023-10-20T15:00:00'),
          endDate: new Date('2023-10-22T11:00:00')
        }
      ]
    },
    {
      id: 3,
      name: 'Milky Way Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Galaxy Wing',
      images: ['milky-way-suite1.jpg', 'milky-way-suite2.jpg'],
      size: 120,
      features: ['King Bed', 'Galaxy View', 'Jacuzzi'],
      bookings: [
        {
          id: 9,
          roomId: 3,
          startDate: new Date('2023-10-05T14:00:00'),
          endDate: new Date('2023-10-10T11:00:00')
        }
      ]
    },
    {
      id: 4,
      name: 'Sirius Room',
      type: 'Standard',
      capacity: 2,
      location: 'Star Wing',
      images: ['sirius-room1.jpg', 'sirius-room2.jpg'],
      size: 40,
      features: ['Double Bed', 'Star View', 'Wi-Fi'],
      bookings: [
        {
          id: 3,
          roomId: 4,
          startDate: new Date('2023-10-15T13:00:00'),
          endDate: new Date('2023-10-18T11:00:00')
        },
        {
          id: 10,
          roomId: 4,
          startDate: new Date('2023-10-20T13:00:00'),
          endDate: new Date('2023-10-22T11:00:00')
        }
      ]
    },
    {
      id: 5,
      name: 'Vega Room',
      type: 'Standard',
      capacity: 2,
      location: 'Star Wing',
      images: ['vega-room1.jpg', 'vega-room2.jpg'],
      size: 45,
      features: ['Double Bed', 'Star View', 'Wi-Fi'],
      bookings: [
        {
          id: 11,
          roomId: 5,
          startDate: new Date('2023-10-05T13:00:00'),
          endDate: new Date('2023-10-07T11:00:00')
        }
      ]
    },
    {
      id: 6,
      name: 'Alpha Centauri Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Galaxy Wing',
      images: ['alpha-centauri-suite1.jpg', 'alpha-centauri-suite2.jpg'],
      size: 110,
      features: ['King Bed', 'Galaxy View', 'Mini Bar'],
      bookings: [
        {
          id: 4,
          roomId: 6,
          startDate: new Date('2023-10-20T14:00:00'),
          endDate: new Date('2023-10-25T11:00:00')
        },
        {
          id: 12,
          roomId: 6,
          startDate: new Date('2023-10-28T14:00:00'),
          endDate: new Date('2023-11-02T11:00:00')
        }
      ]
    },
    {
      id: 7,
      name: 'Betelgeuse Room',
      type: 'Deluxe',
      capacity: 2,
      location: 'Star Wing',
      images: ['betelgeuse-room1.jpg', 'betelgeuse-room2.jpg'],
      size: 55,
      features: ['Queen Bed', 'Star View', 'Wi-Fi'],
      bookings: [
        {
          id: 13,
          roomId: 7,
          startDate: new Date('2023-10-15T15:00:00'),
          endDate: new Date('2023-10-18T11:00:00')
        }
      ]
    },
    {
      id: 8,
      name: 'Polaris Room',
      type: 'Standard',
      capacity: 2,
      location: 'Star Wing',
      images: ['polaris-room1.jpg', 'polaris-room2.jpg'],
      size: 40,
      features: ['Double Bed', 'Star View', 'Wi-Fi'],
      bookings: [
        {
          id: 5,
          roomId: 8,
          startDate: new Date('2023-10-05T13:00:00'),
          endDate: new Date('2023-10-08T11:00:00')
        },
        {
          id: 14,
          roomId: 8,
          startDate: new Date('2023-10-12T13:00:00'),
          endDate: new Date('2023-10-15T11:00:00')
        }
      ]
    },
    {
      id: 9,
      name: 'Nebula Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Galaxy Wing',
      images: ['nebula-suite1.jpg', 'nebula-suite2.jpg'],
      size: 130,
      features: ['King Bed', 'Galaxy View', 'Jacuzzi'],
      bookings: [
        {
          id: 15,
          roomId: 9,
          startDate: new Date('2023-10-18T14:00:00'),
          endDate: new Date('2023-10-22T11:00:00')
        }
      ]
    },
    {
      id: 10,
      name: 'Cassiopeia Room',
      type: 'Deluxe',
      capacity: 2,
      location: 'Star Wing',
      images: ['cassiopeia-room1.jpg', 'cassiopeia-room2.jpg'],
      size: 60,
      features: ['Queen Bed', 'Star View', 'Wi-Fi'],
      bookings: [
        {
          id: 6,
          roomId: 10,
          startDate: new Date('2023-10-12T15:00:00'),
          endDate: new Date('2023-10-14T11:00:00')
        },
        {
          id: 16,
          roomId: 10,
          startDate: new Date('2023-10-20T15:00:00'),
          endDate: new Date('2023-10-22T11:00:00')
        }
      ]
    }
  ];

  getRooms(): Room[] {
    return this.mockRooms;
  }
}
