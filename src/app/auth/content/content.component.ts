import { Component, EventEmitter, Output } from '@angular/core';
import { RoomsFooterComponent } from '../../rooms/rooms-footer/rooms-footer.component';
import { RoomsHeaderComponent } from '../../rooms/rooms-header/rooms-header.component';
import { RouterOutlet } from '@angular/router';
import { AuthFormsComponent } from "../auth-forms/auth-forms.component";
import { NgClass } from '@angular/common';
import { UserPageComponent } from "../user-page/user-page.component";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RoomsHeaderComponent,
    RoomsFooterComponent,
    RouterOutlet,
    AuthFormsComponent,
    NgClass,
    UserPageComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string = "auth";

  constructor(private authService: AuthService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any) {
    console.log('onLogin');
    console.table(input);
  }

  onRegister(input: any) {
    console.log('onRegister');
    console.table(input);
  }

}
