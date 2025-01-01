import { Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {
        path: "",
        component: MasterComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
