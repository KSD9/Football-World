import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {TeamOfTheWeekService} from '../core/services/teamOfTheWeek/teamOfTheWeek.service';
import {TeamOfTheWeekModel} from '../core/models/teamOfTheWeek-view-model.module';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import {HttpModule}  from '@angular/http'

@Component({
  selector: 'app-team-of-the-week',
  templateUrl: './team-of-the-week.component.html',
  styleUrls: ['./team-of-the-week.component.css']
})
export class TeamOfTheWeekComponent implements OnInit {
  private loggedUser: string;

  players:TeamOfTheWeekModel[];

  constructor(private teamOfTheWeekService:TeamOfTheWeekService, private http:Http) { 
    this.players=teamOfTheWeekService.takeAllItalians();
  }

  ngOnInit() {
    this.loggedUser = sessionStorage.getItem("currentUser");
  }

}
