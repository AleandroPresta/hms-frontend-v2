import { Component } from '@angular/core';
import { RoomsFooterComponent } from '../../rooms/rooms-footer/rooms-footer.component';
import { RoomsHeaderComponent } from '../../rooms/rooms-header/rooms-header.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RoomsHeaderComponent,
    RoomsFooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
