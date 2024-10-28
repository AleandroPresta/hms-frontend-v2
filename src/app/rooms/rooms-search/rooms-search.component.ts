import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from '../Room';
import { FormsModule } from '@angular/forms';
import { NgIf, DatePipe, ViewportScroller } from '@angular/common';
import { min } from 'rxjs';

@Component({
  selector: 'app-rooms-search',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    DatePipe
  ],
  templateUrl: './rooms-search.component.html',
  styleUrl: './rooms-search.component.css'
})
export class RoomsSearchComponent implements OnInit {

  minDate: Date = new Date();
  maxDate: Date = new Date();

  searchedRoom: Room = {
    id: 0,
    name: "",
    type: "",
    capacity: 0,
    location: "",
    images: [],
    size: 0,
    features: [],
    bookings: [
      {
        id: 0,
        roomId: 0,
        startDate: new Date(),
        // Set endDate to tomorrow of startDate
        endDate: new Date(new Date().setDate(new Date().getDate() + 1))
      }
    ],
    price: 0,
    rating: 0
  }

  @Output() searchRoomsEvent = new EventEmitter<Date[]>();

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.setMinMaxDates();
  }

  setMinMaxDates() {
    this.minDate = new Date();
    this.maxDate = new Date();
    // Set max date to 1 year from now
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
  }

  onCheckInDateChange(event: any) {
    const selectedDate = new Date(event);

    /*
    If check-in date is less than today, set it to today.
    This is to prevent users from selecting past dates.
    */
    if (selectedDate < this.minDate) {
      this.searchedRoom.bookings[0].startDate = new Date(this.minDate);
    } else {
      this.searchedRoom.bookings[0].startDate = selectedDate;
    }

    /*
    If check-out date is less than check-in date, set it to tomorrow of check-in date.
    This is to prevent users from selecting invalid date ranges.
    */
    if (this.searchedRoom.bookings[0].endDate <= this.searchedRoom.bookings[0].startDate) {
      this.searchedRoom.bookings[0].endDate = new Date(this.searchedRoom.bookings[0].startDate);
      this.searchedRoom.bookings[0].endDate.setDate(this.searchedRoom.bookings[0].endDate.getDate() + 1);
    }
  }

  onCheckOutDateChange(event: any) {
    this.searchedRoom.bookings[0].endDate = new Date(event);
  }

  isCheckOutDateValid(): boolean {
    // Print exactly why the date range is invalid
    if (this.searchedRoom.bookings[0].endDate <= this.searchedRoom.bookings[0].startDate) {
      return false;
    }
    return true;
  }

  showCheckOutDateError(): boolean {
    return !this.isCheckOutDateValid();
  }

  onSubmit() {
    if (this.isCheckOutDateValid()) {
      this.searchRooms(this.minDate, this.maxDate);
      // Scroll to Component2 by ID
      this.viewportScroller.scrollToAnchor('component2');
    } else {
      console.log('Invalid date range');
    }
  }

  searchRooms(minDate: Date, maxDate: Date) {
    this.searchRoomsEvent.emit([minDate, maxDate]);
  }
}