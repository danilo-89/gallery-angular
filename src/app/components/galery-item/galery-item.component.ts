import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-item',
  templateUrl: './galery-item.component.html',
  styleUrls: ['./galery-item.component.css'],
  host: {'class': 'gallery-item-wrapper'}
})
export class GaleryItemComponent implements OnInit {

  @Input() title:string="";
  @Input() author:string="";
  @Input() albumLink:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
