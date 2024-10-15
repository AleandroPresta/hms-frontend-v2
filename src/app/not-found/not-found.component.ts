import { Component } from '@angular/core';
import { RoomsHeaderComponent } from '../rooms/rooms-header/rooms-header.component';
import { RoomsFooterComponent } from '../rooms/rooms-footer/rooms-footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RoomsHeaderComponent,
    RoomsFooterComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
