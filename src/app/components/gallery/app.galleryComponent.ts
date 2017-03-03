import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./app.galleryComponent.css'],

})
export class GalleryComponent { 

galleries1 = [
    {type: 'text', 'data': 'John'},
    {type: 'text', 'data': 'Art'},
    {type: ’image’, 'data': ’../../assets/graphics/john.jpeg'},
  ];

// galleries2 = [
//     {type: 'test', data ; ’lol’},
//     {type:’image’, data:’http://placehold.it/700x400'},
//   ];


  // images;

  //  @Input() datasource;
  //  selectedImage;
 
  //  setSelectedImage(image){
  //     this.selectedImage= image;	
  //  }
}