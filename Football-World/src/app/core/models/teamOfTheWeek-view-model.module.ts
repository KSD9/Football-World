import { TestBed, inject } from '@angular/core/testing';

export class TeamOfTheWeekModel {
    Id: string;
    Name: string;
    Team: string;
    Position: string;
    ImgSrc: string;

    constructor(id?: string, name?: string,
        team?: string, position?: string, img?: string) {
        this.Id = id;
        this.Name = name;
        this.Position = position;
        this.Team = team;
        this.ImgSrc = img;
    }
}