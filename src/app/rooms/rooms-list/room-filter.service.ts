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

  maxCapacity = 10;

  constructor() { }

  getRoomTypes(): string[] {
    return this.roomTypes;
  }

  getMaxCapacity(): number {
    return this.maxCapacity;
  }
}
