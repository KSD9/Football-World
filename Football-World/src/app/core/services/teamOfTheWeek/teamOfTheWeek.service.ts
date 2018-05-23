import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable, Subject , pipe} from 'rxjs';
import 'rxjs/operator/map';

import 'rxjs/operator/catch';

import { TeamOfTheWeekModel } from '../../models/teamOfTheWeek-view-model.module';

@Injectable()
export class TeamOfTheWeekService {

  constructor() { }

  takeAllItalians() {
    const players: TeamOfTheWeekModel[] = [
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
    return players;
  }
}