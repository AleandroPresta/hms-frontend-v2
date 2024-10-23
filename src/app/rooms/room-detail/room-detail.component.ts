import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../Room';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaComponent } from '../../galleria/galleria.component';
import { RoomsHeaderComponent } from "../rooms-header/rooms-header.component";
import { RoomsFooterComponent } from "../rooms-footer/rooms-footer.component";
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { AsyncPipe, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    GalleriaModule,
    GalleriaComponent,
    RoomsHeaderComponent,
    RoomsFooterComponent,
    RatingModule,
    FormsModule,
    FontAwesomeModule,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css',
})
export class RoomDetailComponent {

  room$: Observable<Room>;
  id$: Observable<number>;

  checkInDate!: Date;
  checkOutDate!: Date;
  invalidDate: Boolean = false;
  roomNotAvailable: Boolean = false;

  faUsers = faUsers;
  faRulerCombined = faRulerCombined;

  constructor(private router: ActivatedRoute, private roomsService: RoomsService) {
    this.id$ = this.router.params.pipe(
      map(params => +params['id'])
    );

    this.room$ = this.id$.pipe(
      switchMap(async (id) => this.roomsService.getRoomById(id))
    );
  }

  bookRoomIfAvailable(roomId: number) {
    const checkInDate = new Date(this.checkInDate);
    const checkOutDate = new Date(this.checkOutDate);
    this.roomNotAvailable = false;

    console.log(`Booking Room ID: ${roomId} for ${checkInDate} to ${checkOutDate}`);

    // Check if checkInDate and checkOutDate are valid Date objects
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      console.error('Invalid booking dates');
      this.invalidDate = true;
      return;
    }

    // Check if the endDate is before the startDate
    if (checkInDate > checkOutDate) {
      console.error('Invalid booking range');
      this.invalidDate = true;
      return;
    }
    // If the previous date was invalid the message needs to be cleared
    this.invalidDate = false;

    const isAvailable = this.roomsService.checkAvailable(roomId, this.checkInDate, this.checkOutDate);
    if (isAvailable) {
      console.log('Room is available, booking now...');
      this.roomsService.bookRoom(roomId, this.checkInDate, this.checkOutDate);
    } else {
      this.roomNotAvailable = true;
    }
  }

}