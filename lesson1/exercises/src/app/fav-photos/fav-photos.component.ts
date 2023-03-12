import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://i.ytimg.com/vi/tPaJ8lSFap8/maxresdefault.jpg';
  image2 = 'https://s3-media0.fl.yelpcdn.com/bphoto/mFYmHO2AhPP7wbn_gLzqtg/348s.jpg';
  image3 = 'https://media.wired.com/photos/5932619426780e6c04d2b4c4/191:100/w_1280,c_limit/awkward-seal-ft.jpg';

  constructor() { }

  ngOnInit() {
  }

}