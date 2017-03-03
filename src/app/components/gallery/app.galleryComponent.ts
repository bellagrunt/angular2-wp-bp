import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./app.galleryComponent.css'],

})
export class GalleryComponent { 

textGallerys = [
    {'dataOne': 'John Doe'},
    {'dataOne': 'This is an example text'},
    {'dataTwo': 'Jane Doe'},
    {'dataTwo': 'This can be example text'},
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

// imageGallery = [
//     {'dataOne': '../../assets/graphics/john.jpeg'},
//     {'dataTwo': '../../assets/graphics/john1.jpeg'},
//   ];