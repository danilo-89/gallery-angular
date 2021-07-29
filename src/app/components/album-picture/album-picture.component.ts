import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-picture',
  templateUrl: './album-picture.component.html',
  styleUrls: ['./album-picture.component.css'],
  host: {'class': 'album-item-wrapper'}
})
export class AlbumPictureComponent implements OnInit {

  @Input() title:string="";
  @Input() thumb:string="";
  @Input() imgUrl:string="";


  constructor() { }

  ngOnInit(): void {
  }

}
