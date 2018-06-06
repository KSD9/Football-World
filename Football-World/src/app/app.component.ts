import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}

from 'angularfire2/firestore';

import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
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
      databaseURL: "https://auth-project-127e4.firebaseio.com",
      projectId: "auth-project-127e4",
      storageBucket: "auth-project-127e4.appspot.com",
      messagingSenderId: "752453873871"
  
    });
   
    
  }
}
