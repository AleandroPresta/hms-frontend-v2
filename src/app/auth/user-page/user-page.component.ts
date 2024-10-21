import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() username: string = "";

  updatedFirstName: string = "";
  updatedLastName: string = "";

  @Output() logoutEvent = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.updatedFirstName = this.firstName;
    this.updatedLastName = this.lastName;
  }

  onLogout(): void {
    this.logoutEvent.emit();
  }

  onUpdate(): void {
    this.firstName = this.updatedFirstName;
    this.lastName = this.updatedLastName;
    // Call the service to update the user
    this.authService.updateUser(this.firstName, this.lastName, this.username);
  }

}
