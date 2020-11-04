import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHero } from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log('heroes', this.heroes);
  }

  seeHero(idx: number): void {
    this.router.navigate(['/hero', idx]);
  }
}
