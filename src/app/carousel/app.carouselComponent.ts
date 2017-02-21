import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./app.carouselComponent.css'],
})
export class carouselComponent { 
 
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }
}