import { Injectable } from '@angular/core';
import { IHero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes: IHero[] = [
    {
      name: 'Aquaman',
      biography: `Aquaman's most recognized power is the telepathic ability to communicate with marine life, which it can summon over great distances.`,
      image: 'assets/images/aquaman.png',
      firstApparition: '1941-11-01',
      house: 'DC',
    },
    {
      name: 'Batman',
      biography:
        'The main features of Batman are summarized in "physical prowess, deductive abilities and obsession." Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.',
      image: 'assets/images/batman.png',
      firstApparition: '1939-05-01',
      house: 'DC',
    },
    {
      name: 'Daredevil',
      biography:
        'Having lost his sight, Daredevil\'s remaining four senses were augmented by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can "see" through a "sixth sense" that serves as a radar similar to that of bats.',
      image: 'assets/images/daredevil.png',
      firstApparition: '1964-01-01',
      house: 'Marvel',
    },
    {
      name: 'Hulk',
      biography:
        'His main power is his ability to increase his strength to practically unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).',
      image: 'assets/images/hulk.png',
      firstApparition: '1962-05-01',
      house: 'Marvel',
    },
    {
      name: 'Green Lantern',
      biography:
        'Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps named Chang).',
      image: 'assets/images/linterna-verde.png',
      firstApparition: '1940-06-01',
      house: 'DC',
    },
    {
      name: 'Spider-Man',
      biography:
        'After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man\'s strength allows him to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform incredible jumps. A "spider sense", which lets him know if a danger looms over him, before it happens. Sometimes this can lead Spider-Man to the source of danger.',
      image: 'assets/images/spiderman.png',
      firstApparition: '1962-08-01',
      house: 'Marvel',
    },
    {
      name: 'Wolverine',
      biography:
        'In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some aliens. He also possesses a superhuman strength, which although it does not compare with that of other superheroes like the Hulk, it does exceed that of any human.',
      image: 'assets/images/wolverine.png',
      firstApparition: '1974-11-01',
      house: 'Marvel',
    },
  ];

  constructor() {
    console.log('Heroes service ready!!!');
  }

  getHeroes(): IHero[] {
    return this.heroes;
  }

  getHero(idx: string): IHero {
    return this.heroes[idx];
  }

  searchHeroes(term: string): IHero[] {
    const heroesArr: IHero[] = [];
    term = term.toLowerCase();

    // for (const hero of this.heroes) {
    for (let i = 0; i < this.heroes.length; i++) {
      const hero = this.heroes[i];
      const name = hero.name.toLowerCase();
      const house = hero.house.toLowerCase();
      // indexOf permite buscar un string dentro de name
      // La función regresa 0 o superior si lo encuentra
      if (name.indexOf(term) >= 0) {
        hero.idx = i; // Se le asigna al heroe encontrado el índice real del arreglo
        heroesArr.push(hero);
      }
      if (house.indexOf(term) >= 0 && (term.length >= 3 || term === 'dc')) {
        hero.idx = i;
        heroesArr.push(hero);
      }
    }
    return heroesArr;
  }
}
