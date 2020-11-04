import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent {
  hero: IHero = {
    name: '',
    biography: '',
    firstApparition: '',
    image: '',
    house: '',
  };

  // Para obtener parámetros de la URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    // params es un observable
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params['id']);
      console.log(params);
      this.hero = this.heroesService.getHero(params.id);
    });
  }
}
