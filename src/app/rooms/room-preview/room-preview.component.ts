import { Component, Input } from '@angular/core';
import { Room } from '../Room';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room-preview',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './room-preview.component.html',
  styleUrl: './room-preview.component.css'
})
export class RoomPreviewComponent {

  faUsers = faUsers;
  faRulerCombined = faRulerCombined;

  @Input() room: Room = {
    id: 0,
    name: '',
    type: '',
    capacity: 0,
    location: '',
    images: [],
    size: 0,
    features: [],
    bookings: [],
    price: 0,
    rating: 1
  };

  constructor() { }

}
