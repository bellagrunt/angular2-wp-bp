import { Component } from "@angular/core";
import { MailService } from '../../mail.service';

@Component({
    templateUrl: './contact.html',
    styleUrls: ['./app.contactComponent.css'],
})

export class ContactComponent {

  // onClick(event, value) {
  //   console.log(value);
  //   console.log(event);
  // }

  // constructor(private mail:MailService) {

  // }

public contact = {
  firstName: "Matt", 
  lastName: "Bellantoni", 
  phone: "000-000-0000", 
  email: "..."};

}