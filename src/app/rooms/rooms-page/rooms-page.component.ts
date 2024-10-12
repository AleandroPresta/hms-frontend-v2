import { Component } from '@angular/core';
import { RoomsHeaderComponent } from "../rooms-header/rooms-header.component";
import { RoomsSearchComponent } from "../rooms-search/rooms-search.component";
import { RoomsListComponent } from '../rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [RoomsHeaderComponent, RoomsSearchComponent, RoomsListComponent],
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css'
})
export class RoomsPageComponent {

}
