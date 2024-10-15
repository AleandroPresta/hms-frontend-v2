import { Component } from '@angular/core';
import { RoomsHeaderComponent } from '../rooms/rooms-header/rooms-header.component';
import { RoomsFooterComponent } from '../rooms/rooms-footer/rooms-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RoomsHeaderComponent,
    RoomsFooterComponent,
    FontAwesomeModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;

}
