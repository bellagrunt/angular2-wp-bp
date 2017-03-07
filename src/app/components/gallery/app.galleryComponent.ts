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
    image : '../../assets/graphics/john.jpeg'
  },
  {
    title : 'Jane Doe',
    description : 'This is an example text',
    image : '../../assets/graphics/images22.jpeg'
  },
    {
    title : 'Alex Doe',
    description : 'This is an example text',
    image : '../../assets/graphics/john.jpeg'
  }
]

// row two
gallery1 = [
  {
    title : 'Jane Doe',
    description : 'This is an example text',
    image : '../../assets/graphics/images22.jpeg'
  },
  {
    title : 'Alex Doe',
    description : 'This is an example text',
    image : '../../assets/graphics/john.jpeg'
  },
    {
    title : 'John Doe',
    description : 'This is an example text',
    image : '../../assets/graphics/images22.jpeg'
  }
]

}