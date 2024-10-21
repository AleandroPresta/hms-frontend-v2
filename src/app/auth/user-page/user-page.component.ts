import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() username: string = "";

}
