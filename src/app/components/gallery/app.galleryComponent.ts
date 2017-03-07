import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./app.galleryComponent.css'],

})
export class GalleryComponent { 

// row one
gallery = [
  {
    title : 'John Doe',
    description : 'This is an example text',
    image : 'http://placehold.it/700x400'
  },
  {
    title : 'Jane Doe',
    description : 'This is an example text',
    image : 'http://placehold.it/700x400'
  },
    {
    title : 'Alex Doe',
    description : 'This is an example text',
    image : 'http://placehold.it/700x400'
  }
]

// row two
gallery1 = [
  {
    title : 'Jane Doe',
    description : 'This is an example text',
    image : 'http://placehold.it/700x400'
  },
  {
    title : 'Alex Doe',
    description : 'This is an example text',
    image : 'http://placehold.it/700x400'
  },
    {
    title : 'John Doe',
    description : 'This is an example text',
    image : 'http://placehold.it/700x400'
  }
]

}