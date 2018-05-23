import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamOfTheWeekComponent } from './team-of-the-week/team-of-the-week.component';
import {TeamOfTheWeekService} from '../app/core/services/teamOfTheWeek/teamOfTheWeek.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LandingPageComponent,
    TeamOfTheWeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [TeamOfTheWeekService],
  bootstrap: [AppComponent]
})
export class AppModule { }
