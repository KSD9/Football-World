import { Component, OnInit } from '@angular/core';
import {TeamOfTheWeekService} from '../core/services/teamOfTheWeek/teamOfTheWeek.service';
import {TeamOfTheWeekModel} from '../core/models/teamOfTheWeek-view-model.module';


@Component({
  selector: 'app-team-of-the-week',
  templateUrl: './team-of-the-week.component.html',
  styleUrls: ['./team-of-the-week.component.css']
})
export class TeamOfTheWeekComponent implements OnInit {

  players:TeamOfTheWeekModel[];

  constructor(private teamOfTheWeekService:TeamOfTheWeekService) { 
    this.players=teamOfTheWeekService.takeAllItalians();
  }

  ngOnInit() {
  }

}
