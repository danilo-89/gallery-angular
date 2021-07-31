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
  albumObj:any;
  albumId = '0';
  filteredArr= [];
  searchActive = false;
  albumName:any;
  rowGrid = false;
  largeImg = ['', 0];
  deleteDialog = [false,''];

  // onSave(event?: MouseEvent) {
  //   const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
  //   alert('Saved.' + evtMsg);
  //   this.albumArray = [this.albumArray[0]]
  //   if (event) { event.stopPropagation(); }
  // }

  deleteCancel() {
    this.deleteDialog = [false, ''];
  }

  deleteConfirm() {
    const imgId = this.deleteDialog[1];
    console.log(imgId)
    console.log(this.filteredArr);
    const newArr = this.albumArray.filter((item:{id:string}) => {return item['id']!=imgId});

    if(this.searchActive) {
      const newFilteredArr = this.filteredArr.filter((item:{id:string}) => {return item['id']!=imgId})
      this.filteredArr = newFilteredArr;
    }
    this.albumArray = newArr;

    this.deleteDialog = [false, ''];
  }

  deletePic(imgId:string) {
    this.deleteDialog = [true, imgId];
  }


  setRowGrid(state:boolean) {
    if(state) {
      this.rowGrid = true;
    } else {
      this.rowGrid = false;
    }
  }

  searchPics(e:any) {
    console.log((e as HTMLInputElement).value);
    const str = (e as HTMLInputElement).value;
    if(str.trim()) {
      this.searchActive = true;
      this.filteredArr = this.albumArray.filter
      ((item:{title:string}) => item['title'].search(str)>=0)      
    } else {
      this.searchActive = false;
      this.filteredArr = []
    }
    console.log(this.filteredArr);
  }


  showLargeImg(e: any, n:string, i:number) {
    if (e.target.tagName == 'IMG') {
      this.largeImg[0] = n;
      this.largeImg[1] = i;
    }
    // console.log(e)
    // console.log(e.target.localName)
    // console.log(e.target.tagName)
  }

  nextImg(event:any) {
    event.stopPropagation();
    const currentIndex = +this.largeImg[1];
    if (currentIndex === this.albumArray.length - 1) {
      this.largeImg[0] = this.albumArray[0].url;
      this.largeImg[1] = 0;
    } else {
      this.largeImg[0] = this.albumArray[currentIndex+1].url;
      this.largeImg[1] = currentIndex+1;
    }
  }

  prevImg(event:any) {
    event.stopPropagation();
    const currentIndex = +this.largeImg[1];
    console.log(currentIndex)
    if (currentIndex === 0) {
      this.largeImg[0] = this.albumArray[this.albumArray.length - 1].url;
      this.largeImg[1] = this.albumArray.length - 1;
    } else {
      this.largeImg[0] = this.albumArray[currentIndex-1].url;
      this.largeImg[1] = currentIndex-1;
    }
    
  }

  closeLarge() {
    this.largeImg = ['', 0];
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.album)
      this.albumId = params.album || '0';
      this.getAlbumName(this.albumId)
      this.getData(this.albumId)
    });
  }

  getData(albumId:string) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    return this.http.get(url)
      .subscribe(
        (resp) => {
          this.albumArray = resp;
          console.log(this.albumArray)
        }
      );
  }

  getAlbumName(albumId:string) {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}`
    return this.http.get(url)
      .subscribe(
        (resp) => {
          this.albumObj = resp;
          this.albumName = this.albumObj['title']
        }
      );
  }

}

