import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css'],
})
export class SingleAlbumComponent implements OnInit {

  albumArray:any;
  albumId = '0';

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    this.albumArray = [this.albumArray[0]]
    if (event) { event.stopPropagation(); }
  }

  deletePic(imgId:string) {
    console.log(imgId)
    const filteredArr = this.albumArray.filter((item:{id:string}) => {return item['id']!=imgId})
    this.albumArray = filteredArr;
  }

  searchPics() {
    console.log('imgId')
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.album)
      this.albumId = params.album || '0';
      this.getData(this.albumId)
    });
  }

  getData(albumId:string) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    return this.http.get(url)
      .subscribe(
        (resp) => {
          this.albumArray = resp
          console.log(this.albumArray)
        }
      );
  }

}

