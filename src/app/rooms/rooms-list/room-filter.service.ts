import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomFilterService {

  roomTypes: string[] = [
    'Suite',
    'Deluxe Room',
    'Standard Room',
    'Economy Room',
    'Penthouse'
  ];

  roomLocations: string[] = [
    'Galaxy Wing',
    'Orion Wing',
    'Celestial Wing',
    'Lunar Wing',
    'Stellar Wing',
    'Asteroid Wing',
    'Comet Wing',
    'Supernova Wing',
    'Event Horizon Wing',
    'Pulsar Wing'
  ];

  maxCapacity = 10;

  constructor() { }

  getRoomTypes(): string[] {
    return this.roomTypes;
  }

  getMaxCapacity(): number {
    return this.maxCapacity;
  }

  getRoomLocations(): string[] {
    return this.roomLocations;
  }
}
