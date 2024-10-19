import { Component } from '@angular/core';
import { RoomsFooterComponent } from '../../rooms/rooms-footer/rooms-footer.component';
import { RoomsHeaderComponent } from '../../rooms/rooms-header/rooms-header.component';
import { RouterOutlet } from '@angular/router';
import { AuthFormsComponent } from "../auth-forms/auth-forms.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RoomsHeaderComponent,
    RoomsFooterComponent,
    RouterOutlet,
    AuthFormsComponent,
    NgClass
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  active: string = "login";

  setActive(active: string) {
    this.active = active;
  }

}
