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
    this.postsCollection = this.fireStore.collection('posts');
    this.posts = this.postsCollection.snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as BlogViewModel;
        data.id=a.payload.doc.id;
        return data;
      })
    })
   // this.posts = this.fireStore.collection('posts').valueChanges();
    
  }

 getPosts(){
  
  
   return this.posts;
 }

 addPost(post:BlogViewModel) {

  //Add the new task to the collection

  this.postsCollection.add(post);

} 


 
}

  


 

