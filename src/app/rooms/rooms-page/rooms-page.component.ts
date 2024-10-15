import { Component, OnInit } from '@angular/core';
import { RoomsHeaderComponent } from "../rooms-header/rooms-header.component";
import { RoomsSearchComponent } from "../rooms-search/rooms-search.component";
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { Room } from '../Room';
import { RoomsService } from '../rooms.service';
import { RoomsFooterComponent } from '../rooms-footer/rooms-footer.component';

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [RoomsHeaderComponent, RoomsSearchComponent, RoomsListComponent, RoomsFooterComponent],
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css'
})
export class RoomsPageComponent implements OnInit {

  roomList: Room[] = [];

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomsService.mockRooms;
  }

}
