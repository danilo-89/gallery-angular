import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Input() imgId:string="";
  @Output() onDeletePic = new EventEmitter();


  fireDeletePicEvent(a:any) {
    this.onDeletePic.emit(a)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
