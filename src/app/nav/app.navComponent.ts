import { Component } from '@angular/core';

@Component({
  selector: 'ct-navbar',
  templateUrl: `./nav.html`,
  styleUrls: ['./app.navComponent.css'],
})
export class NavComponent  { 
    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

}