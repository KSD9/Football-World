import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './core/services/Auth/auth.service';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamOfTheWeekComponent } from './team-of-the-week/team-of-the-week.component';
import {TeamOfTheWeekService} from '../app/core/services/teamOfTheWeek/teamOfTheWeek.service';
import {AuthGuard} from '../app/core/services/Auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LandingPageComponent,
    TeamOfTheWeekComponent,
    BlogComponent,
    ChatComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [TeamOfTheWeekService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
