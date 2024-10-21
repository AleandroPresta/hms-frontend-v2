import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() logoutEvent = new EventEmitter<void>();

  onLogout(): void {
    this.logoutEvent.emit();
  }

}
