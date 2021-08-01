import { GaleryComponent } from '../../components/galery/galery.component';
import { GaleryItemComponent } from '../../components/galery-item/galery-item.component';
import { SingleAlbumComponent } from '../../components/single-album/single-album.component';
import { AlbumPictureComponent } from '../../components/album-picture/album-picture.component';
import { LoginComponent } from '../../components/login/login.component';
import { MainComponent } from 'src/app/components/main/main.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { servicesVersion } from 'typescript';

const routes: Routes = [
    { path: 'album', component: SingleAlbumComponent},
    { path: 'home', component: GaleryComponent},
    { path: "", redirectTo: "/home", pathMatch: "full"}
];

// {path: "home", component: HomeComponent},
//     {path: "about", component: AboutComponent},
//     {path: "services", component: ServicesComponent},
//     {path: "contact", component: ContactComponent},
//     {path: "", redirectTo: "/admin/home", pathMatch: "full"}



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }