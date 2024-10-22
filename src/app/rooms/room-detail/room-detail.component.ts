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

}