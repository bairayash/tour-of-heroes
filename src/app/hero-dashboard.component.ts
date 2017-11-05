import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroDashboardComponent {
    heroes : Hero[];
	selectedHero : Hero;
	constructor(private heroService: HeroService) { }	

	ngOnInit(): void {
     this.getHeroes();
     }

    getHeroes() : void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));

    }

    onSelect(hero:Hero): void{
		this.selectedHero = hero;	  
	}   

}