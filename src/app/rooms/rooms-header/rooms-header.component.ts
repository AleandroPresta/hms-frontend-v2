import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rooms-header',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './rooms-header.component.html',
  styleUrl: './rooms-header.component.css'
})
export class RoomsHeaderComponent {

  faUser = faUser;

}
