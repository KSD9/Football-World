import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginEntry } from './loginEntry.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm: FormGroup;
  loginEntry = new LoginEntry();
  formAlert = 'This field is required.';

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'email': [
        null,
        Validators.compose([Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required])
      ]
    });
  }

  ngOninit() { }

}
