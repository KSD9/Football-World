import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable, Subject , pipe} from 'rxjs';


import 'rxjs/operator/map';

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}

from 'angularfire2/firestore';
import 'rxjs/operator/catch';

import { BlogViewModel } from '../../models/blogViewModel.module';


@Injectable()
export class BlogService {
  
  
  postsCollection: AngularFirestoreCollection<BlogViewModel>;
  
  
  posts: Observable<BlogViewModel[]>;
  constructor(private http:Http,public fireStore:AngularFirestore)
  { 
    this.posts = this.fireStore.collection('posts').valueChanges();
    console.log(this.posts);
  }

 getItems(){
  
  
   return this.posts;
 }

 
}

  


 

