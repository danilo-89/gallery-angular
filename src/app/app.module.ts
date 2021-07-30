import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { IconModule } from '@ant-design/icons-angular';

import { AppComponent } from './app.component';
import { GaleryComponent } from './components/galery/galery.component';
import { GaleryItemComponent } from './components/galery-item/galery-item.component';

import { RouterModule, Routes } from '@angular/router';
import { SingleAlbumComponent } from './components/single-album/single-album.component';
import { AlbumPictureComponent } from './components/album-picture/album-picture.component'; 

const appRoutes: Routes = [
  { path: 'albums', component: GaleryComponent},
  { path: 'album', component: SingleAlbumComponent},
  { path: '', component: GaleryItemComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent,
    GaleryItemComponent,
    SingleAlbumComponent,
    AlbumPictureComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
