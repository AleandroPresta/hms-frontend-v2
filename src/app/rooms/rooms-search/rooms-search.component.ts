import { Component, OnInit } from '@angular/core';
import { Room } from '../Room';
import { FormsModule } from '@angular/forms';
import { NgIf, DatePipe } from '@angular/common';

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
    ]
  }

  checkInSelected: boolean = false;
  checkOutSelected: boolean = false;

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
    this.checkInSelected = true;
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
    if (this.checkOutSelected && this.searchedRoom.bookings[0].endDate <= this.searchedRoom.bookings[0].startDate) {
      this.searchedRoom.bookings[0].endDate = new Date(this.searchedRoom.bookings[0].startDate);
      this.searchedRoom.bookings[0].endDate.setDate(this.searchedRoom.bookings[0].endDate.getDate() + 1);
    }
  }

  onCheckOutDateChange(event: any) {
    this.checkOutSelected = true;
    this.searchedRoom.bookings[0].endDate = new Date(event);
  }

  isCheckOutDateValid(): boolean {
    return this.checkInSelected && this.checkOutSelected &&
      this.searchedRoom.bookings[0].endDate > this.searchedRoom.bookings[0].startDate;
  }

  showCheckOutDateError(): boolean {
    return this.checkInSelected && this.checkOutSelected && !this.isCheckOutDateValid();
  }

  onSubmit() {
    if (this.isCheckOutDateValid()) {
      console.log('Form submitted');
      console.table(this.searchedRoom);
      this.searchRooms(this.searchedRoom);
    } else {
      console.log('Invalid date range');
    }
  }

  searchRooms(room: Room) {
    // TODO implement
  }
}