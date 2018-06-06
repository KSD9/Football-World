import { Component, OnInit } from '@angular/core';
import {BlogService} from '../core/services/blog/blog.service'
import {BlogViewModel} from '../core/models/blogViewModel.module';
import { Http } from '@angular/http';
import {Response} from '@angular/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  public loggedUser:string;
  
  
  

  constructor(private blogService:BlogService,private http: Http) { 
    this.getItems();
    
    
  
  
   
    
  
  }
  
  private postsModels:BlogViewModel[];
  private errorMessage:any = '';
  post:BlogViewModel={
   
    title:'',
    description:'',
    imageUrl:'',
    articleUrl:'',
    createdByUser:this.getUser(),
  };
  

  getItems(){
    this.blogService.getPosts().subscribe(posts => this.postsModels= posts); console.log(this.postsModels);
    }

  
   getUser(){
    this.loggedUser = sessionStorage.getItem("currentUser");
    return this.loggedUser.toString();
   } 
onSubmit (){
 

  this.blogService.addPost(this.post);
  this.post.title ='';
  this.post.description='';
  this.post.imageUrl= '';
  this.post.articleUrl='';
  

}
  
  

  ngOnInit() {
   
    
  }

}
