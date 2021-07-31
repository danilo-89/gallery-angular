import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconDefinition, IconService } from '@ant-design/icons-angular';
import { AccountBookFill, AppstoreFill, ArrowLeftOutline, ArrowRightOutline, DeleteOutline, MenuOutline, SearchOutline } from '@ant-design/icons-angular/icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'galeryapp';

  constructor(private _iconService: IconService) {
    // Import all. NOT RECOMMENDED. ❌
    // const antDesignIcons = AllIcons as {
      // [key: string]: IconDefinition;
    // };
    // this._iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));
    // Import what you need! ✔️
    this._iconService.addIcon(...[ DeleteOutline, SearchOutline, MenuOutline, AppstoreFill, ArrowLeftOutline, ArrowRightOutline ]);
  }
}




