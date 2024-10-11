import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsModule } from './rooms/rooms.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel-management-system';
}
