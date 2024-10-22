import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsPageComponent } from './rooms/rooms-page/rooms-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomDetailComponent } from './rooms/room-detail/room-detail.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './auth/content/content.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    // Default route
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'rooms', component: RoomsPageComponent },
    { path: 'rooms/:id', component: RoomDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'auth', component: ContentComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: NotFoundComponent }
];
