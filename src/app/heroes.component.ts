import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes().then((heroes)=>{
      this.heroes = heroes;
    });
  }
  ngOnInit(): void{
    this.getHeroes();
  }
  gotoDetail(): void{
    this.router.navigate(['/details',this.selectedHero.id]);
  }
  constructor(private heroService: HeroService, private router:Router) { 
    // this.heroes = this.heroService.getHeroes();
  };
}


