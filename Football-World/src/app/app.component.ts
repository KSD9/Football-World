import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDKW4Ncm0294Hg-dvdhaJkjb7TR2rCDf_U",
      authDomain: "auth-project-127e4.firebaseapp.com",
  
    });
  }
}
