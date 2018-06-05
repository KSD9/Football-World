import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable, Subject , pipe} from 'rxjs';
import 'rxjs/operator/map';


import 'rxjs/operator/catch';

import { BlogViewModel } from '../../models/blogViewModel.module';

@Injectable()
export class BlogService {

  constructor(private http:Http) { }
 
  getData():Observable<BlogViewModel[]> {
    
    return this.http.get('http://jsonplaceholder.typicode.com/users/')
        .map(this.extractData);
        
}

private extractData(res:Response) {
    let body = res.json();
    return body || [];
}

private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}

  getAllPosts() {
    const posts: BlogViewModel[] = [
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
      {       
        Id: '8',
        Name: 'Steven Gerrard',
        Position: 'Central-Midfield',
        Team: 'Liverpool FC.',
        ImgSrc: 'http://www.heraldscotland.com/resources/images/7744890.jpg?display=1&htype=0&type=responsive-gallery'
      },
    ];
    return posts;
  }
}