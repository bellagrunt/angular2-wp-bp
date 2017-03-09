import { Component } from "@angular/core";

@Component({
    templateUrl: './contact.html',
    styleUrls: ['./app.contactComponent.css'],
})

export class ContactComponent {

public contact = {
  firstName: "Matt", 
  lastName: "Bellantoni", 
  phone: "000-000-0000", 
  email: "..."};

}