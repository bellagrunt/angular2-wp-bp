import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'ct-navbar',
  templateUrl: `./nav.html`,
  styleUrls: ['./app.navComponent.css'],
})
export class NavComponent  { 

    constructor(public af:AngularFire) { }

    ngOnInit() {

    }

    login(){
        this.af.auth.login();
    }

    logout(){
        this.af.auth.logout();
    }

    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

}