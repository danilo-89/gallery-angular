import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  rowGrid = false;
  testStr="something";
  albumArray:any;
  usersArray:any;
  albumCovers:any;
  isAlbumsReady = false;
  isCoversReady = false;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.getUserData()
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.abc);
    });
  }

  setRowGrid(state:boolean) {
    if(state) {
      this.rowGrid = true;
    } else {
      this.rowGrid = false;
    }
  }

  getUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users/'
    return this.http.get(url)
      .subscribe(
        (resp) => {
          this.usersArray = resp
          console.log(this.usersArray);
          this.getAlbumData()
        }
      );
  }

  filterArray(arr:any) {
    const result:any = {}
    const map = new Map();
    for (const item of arr) {
        if(!map.has(item['albumId'])){
            map.set(item['albumId'], true);    // set any value to Map
            result[item['albumId']] = item['thumbnailUrl']
        }
    }
    console.log(result)
    this.albumCovers = result;
    this.isCoversReady = true;
  }

  getAlbumData() {
    const url = 'https://jsonplaceholder.typicode.com/albums/'
    return this.http.get(url)
      .subscribe(
        (resp) => {
          this.albumArray = resp;
          console.log(this.albumArray);
          this.getPhotos()
          this.isAlbumsReady = true;
        }
      );
  }


  getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos/'
    return this.http.get(url)
      .subscribe(
        (resp) => {

          this.filterArray(resp)

          // console.log([...new Set(this.albumCovers.map
          //   ((item:{albumId: number, url: string})=> item['albumId']))])
          // console.log(resp.map((item:{albumId:number}) => item['albumId']));
          // const unique = [...new Set(resp.map(item => item.group))]
        }
      );
  }

  getUserName(userId: string) {
    return this.usersArray.filter((item:{id:string}) => item["id"] === userId)[0]["name"]
  }

}
