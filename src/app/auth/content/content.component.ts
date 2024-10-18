import { Component } from '@angular/core';
import { RoomsHeaderComponent } from "../../rooms/rooms-header/rooms-header.component";
import { RoomsFooterComponent } from "../../rooms/rooms-footer/rooms-footer.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RoomsHeaderComponent, RoomsFooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
