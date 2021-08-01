import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GaleryComponent } from '../../components/galery/galery.component';
import { GaleryItemComponent } from '../../components/galery-item/galery-item.component';
import { SingleAlbumComponent } from '../../components/single-album/single-album.component';
import { AlbumPictureComponent } from '../../components/album-picture/album-picture.component';
import { MainComponent } from '../../components/main/main.component';
import { IconModule } from '@ant-design/icons-angular';



@NgModule({
  declarations: [
    MainComponent,
    GaleryComponent,
    GaleryItemComponent,
    SingleAlbumComponent,
    AlbumPictureComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IconModule
  ]
})
export class AdminModule { }

