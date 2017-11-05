import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./app.component.css']
})

  export class HeroListComponent {
    heroes : Hero[];
	selectedHero : Hero;
	constructor(private heroService: HeroService) { 
     
	}
	ngOnInit(): void {
     this.getHeroes();
     }

	getHeroes() : void {
      this.heroService.getHeroes().then(heroesPromise => this.heroes = heroesPromise);

	}
    onSelect(hero:Hero): void{
		this.selectedHero = hero;	  
	}
}