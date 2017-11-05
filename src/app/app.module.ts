import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroTitleComponent } from './hero-title.component' ;
import { HeroListComponent } from './hero-list.component' ;
import { HeroDashboardComponent } from './hero-dashboard.component';

import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroTitleComponent,
    HeroListComponent,
    HeroDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
