import { Component, OnInit } from '@angular/core';
import { IHero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
})
export class ResultSearchComponent implements OnInit {
  foundHeroes: IHero[] = [];
  term: string;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('parameters', params);
      this.term = params.term;
      this.foundHeroes = this.heroesService.searchHeroes(params.term);
      console.log('Found Heroes', this.foundHeroes);
    });
  }

  seeHero(idx: number): void {
    this.router.navigate(['/hero', idx]);
  }
}
