import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./app.galleryComponent.css'],

})
export class GalleryComponent { 

textGallerys = [
    {'dataOne': 'John Doe'},
    {'dataTwo': 'Jane Doe'},
  ];

imageGallerys = [
    {'imageOne': '../../assets/graphics/john.jpeg'},
    {'imageTwo': '../../assets/graphics/images22.jpeg'},
  ];

// textOnes = [
//     {type: 'text', 'data': 'John Doe'},
//     {type: 'text', 'data': 'This is an example text'},
//   ];

// imageTwos = [
//     {type: 'image', 'data': '../../assets/graphics/john.jpeg'},
//   ];

// textTwos = [
//     {type: 'text', 'data': 'John Doe'},
//     {type: 'text', 'data': 'This is an example text'},
//   ];

}