import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

export const routes: Routes = [
    // Default route
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'rooms', component: RoomsListComponent },
];
