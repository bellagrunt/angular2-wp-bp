import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./app.galleryComponent.css'],

})
export class GalleryComponent { 

  galleries1 = [
    'lol',
    'wow',
    'hi',
    'http://placehold.it/700x400',
  ];

  galleries2 = [
    'lol',
    'wow',
    'hi',
    'http://placehold.it/700x400',
  ];


  // images;

  //  @Input() datasource;
  //  selectedImage;
 
  //  setSelectedImage(image){
  //     this.selectedImage= image;	
  //  }
}