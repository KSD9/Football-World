import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './core/services/blog/blog.service';
import { ItalianFoodsComponent } from './recipes/italian-foods/italian-foods.component';
import { SpanishFoodsComponent } from './recipes/spanish-foods/spanish-foods.component';
import { RecipeService } from './core/services/recipe/recipe.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    BlogComponent,
    ItalianFoodsComponent,
    SpanishFoodsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BlogService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
