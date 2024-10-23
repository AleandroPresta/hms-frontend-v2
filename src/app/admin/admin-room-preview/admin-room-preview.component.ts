import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-room-preview',
  standalone: true,
  imports: [],
  templateUrl: './admin-room-preview.component.html',
  styleUrl: './admin-room-preview.component.css'
})
export class AdminRoomPreviewComponent {

  @Input() roomName: string = "";
  @Input() roomImageUrl: string = "";

}
