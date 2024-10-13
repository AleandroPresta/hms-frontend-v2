import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-search',
  standalone: true,
  imports: [],
  templateUrl: './rooms-search.component.html',
  styleUrl: './rooms-search.component.css'
})
export class RoomsSearchComponent {

  minDate = new Date();

  onSubmit() {
    console.log('Search submitted');
    // Here you would typically call a service to perform the search
  }

}
