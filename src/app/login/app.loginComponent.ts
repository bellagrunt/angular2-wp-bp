import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    templateUrl: './login.html',
})

export class loginComponent {
  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(public fb: FormBuilder) {}

}