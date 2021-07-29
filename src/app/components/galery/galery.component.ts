import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  testStr="something";
  albumArray:any;
  usersArray:any;

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

  getAlbumData() {
    const url = 'https://jsonplaceholder.typicode.com/albums/'
    return this.http.get(url)
      .subscribe(
        (resp) => {
          this.albumArray = resp
          console.log(this.albumArray);
        }
      );
  }

  getUserName(userId: string) {
    return this.usersArray.filter((item:{id:string}) => item["id"] === userId)[0]["name"]
  }

}
