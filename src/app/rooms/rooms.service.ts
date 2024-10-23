import { Injectable } from '@angular/core';
import { Booking, Room } from './Room';
import { mock } from 'node:test';

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
      images: ['https://picsum.photos/seed/andromeda/800/600'],
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
      id: 2,
      name: 'Nebula Chamber',
      type: 'Deluxe Room',
      capacity: 2,
      location: 'Orion Wing',
      images: ['https://picsum.photos/seed/nebula/800/600'],
      size: 80,
      features: ['Queen Bed', 'Nebula View', 'Personal AI Assistant'],
      bookings: [
        {
          id: 3,
          roomId: 2,
          startDate: new Date('2023-10-12T14:00:00'),
          endDate: new Date('2023-10-15T11:00:00')
        }
      ],
      price: 180,
      rating: 4.7
    },
    {
      id: 3,
      name: 'Cosmic Dome',
      type: 'Suite',
      capacity: 5,
      location: 'Celestial Wing',
      images: ['https://picsum.photos/seed/cosmic/800/600'],
      size: 120,
      features: ['Two King Beds', '360° Space View', 'Holographic Entertainment System'],
      bookings: [
        {
          id: 4,
          roomId: 3,
          startDate: new Date('2023-11-01T15:00:00'),
          endDate: new Date('2023-11-05T12:00:00')
        }
      ],
      price: 320,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Starlight Cabin',
      type: 'Standard Room',
      capacity: 2,
      location: 'Lunar Wing',
      images: ['https://picsum.photos/seed/starlight/800/600'],
      size: 60,
      features: ['Double Bed', 'Moon View', 'Free Wi-Fi'],
      bookings: [
        {
          id: 5,
          roomId: 4,
          startDate: new Date('2023-09-22T14:00:00'),
          endDate: new Date('2023-09-25T11:00:00')
        }
      ],
      price: 150,
      rating: 4.1
    },
    {
      id: 5,
      name: 'Quasar Suite',
      type: 'Suite',
      capacity: 3,
      location: 'Stellar Wing',
      images: ['https://picsum.photos/seed/quasar/800/600'],
      size: 110,
      features: ['King Bed', 'Quasar View', 'Personal Robot Butler'],
      bookings: [
        {
          id: 6,
          roomId: 5,
          startDate: new Date('2023-11-10T14:00:00'),
          endDate: new Date('2023-11-13T11:00:00')
        }
      ],
      price: 290,
      rating: 4.8
    },
    {
      id: 6,
      name: 'Meteorite Room',
      type: 'Economy Room',
      capacity: 1,
      location: 'Asteroid Wing',
      images: ['https://picsum.photos/seed/meteorite/800/600'],
      size: 40,
      features: ['Single Bed', 'Meteor Shower View', 'Basic Amenities'],
      bookings: [
        {
          id: 7,
          roomId: 6,
          startDate: new Date('2023-12-01T14:00:00'),
          endDate: new Date('2023-12-03T11:00:00')
        }
      ],
      price: 90,
      rating: 3.9
    },
    {
      id: 7,
      name: 'Comet Chamber',
      type: 'Deluxe Room',
      capacity: 2,
      location: 'Comet Wing',
      images: ['https://picsum.photos/seed/comet/800/600'],
      size: 85,
      features: ['Queen Bed', 'Comet View', 'Advanced Climate Control'],
      bookings: [
        {
          id: 8,
          roomId: 7,
          startDate: new Date('2023-10-18T14:00:00'),
          endDate: new Date('2023-10-20T11:00:00')
        }
      ],
      price: 210,
      rating: 4.5
    },
    {
      id: 8,
      name: 'Nova Suite',
      type: 'Suite',
      capacity: 4,
      location: 'Supernova Wing',
      images: ['https://picsum.photos/seed/nova/800/600'],
      size: 130,
      features: ['King Bed', 'Supernova View', 'Luxury Spa'],
      bookings: [
        {
          id: 9,
          roomId: 8,
          startDate: new Date('2023-11-20T14:00:00'),
          endDate: new Date('2023-11-25T11:00:00')
        }
      ],
      price: 350,
      rating: 4.9
    },
    {
      id: 9,
      name: 'Black Hole Chamber',
      type: 'Standard Room',
      capacity: 2,
      location: 'Event Horizon Wing',
      images: ['https://picsum.photos/seed/blackhole/800/600'],
      size: 75,
      features: ['Double Bed', 'Black Hole Simulation Window', 'Gravity Control'],
      bookings: [
        {
          id: 10,
          roomId: 9,
          startDate: new Date('2023-10-25T14:00:00'),
          endDate: new Date('2023-10-28T11:00:00')
        }
      ],
      price: 190,
      rating: 4.6
    },
    {
      id: 10,
      name: 'Pulsar Penthouse',
      type: 'Penthouse',
      capacity: 6,
      location: 'Pulsar Wing',
      images: ['https://picsum.photos/seed/pulsar/800/600'],
      size: 150,
      features: ['Three King Beds', 'Pulsar View', 'Private Gym'],
      bookings: [
        {
          id: 11,
          roomId: 10,
          startDate: new Date('2023-12-10T14:00:00'),
          endDate: new Date('2023-12-15T11:00:00')
        }
      ],
      price: 450,
      rating: 5
    }
  ];


  getRooms(): Room[] {
    return this.mockRooms;
  }

  getRoomById(id: number): Room {
    const room: Room | undefined = this.mockRooms.find((room) => {
      return room.id === id;
    });

    if (!room) {
      throw new Error(`Room with ID ${id} not found`);
    }
    return room;
  }

  getRoomByBookingRange(startDate: Date, endDate: Date): Room[] {
    const availableRooms: Room[] = this.mockRooms.filter((room) => {
      // Return true if NO booking overlaps with the requested period
      return !room.bookings.some((booking) => {
        return startDate < booking.endDate && endDate > booking.startDate;
      });
    });

    return availableRooms;
  }

  checkAvailable(roomId: number, startDate: Date, endDate: Date): boolean {
    console.log(`checkAvailable for Room ID: ${roomId} for ${startDate} to ${endDate}`);

    const room: Room = this.getRoomById(roomId);
    const isAvailable: boolean = !room.bookings.some((booking) => {
      return startDate < booking.endDate && endDate > booking.startDate;
    });

    return isAvailable;
  }

  bookRoom(roomId: number, startDate: Date, endDate: Date) {
    // Check if checkInDate and checkOutDate are valid Date objects
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error('Invalid booking dates');
      return;
    }

    // Check if the endDate is before the startDate
    if (startDate > endDate) {
      console.error('Invalid booking dates');
      return;
    }


    const booking: Booking = {
      id: this.mockRooms[roomId - 1].bookings.length + 1,
      roomId: roomId,
      startDate: startDate,
      endDate: endDate
    }

    // Add the booking to the room
    this.mockRooms.find((room) => room.id === roomId)?.bookings.push(booking);
    console.table(this.mockRooms.find((room) => room.id === roomId)?.bookings);
  }

}
