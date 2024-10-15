import { Component } from '@angular/core';
import { RoomsHeaderComponent } from '../rooms/rooms-header/rooms-header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RoomsHeaderComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
