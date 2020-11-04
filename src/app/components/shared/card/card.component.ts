import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHero } from '../../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() hero: IHero = {
    name: '',
    biography: '',
    firstApparition: '',
    image: '',
    house: '',
  };

  @Input() index: number;

  // Entre <> se dice lo que va a emitir, en este caso emitirá el índice
  // selectedHero es un observable
  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    // Se inicializa el EventEmitter
    this.selectedHero = new EventEmitter();
   }

  ngOnInit(): void {
  }

  seeHeroDetails(): void {
    this.router.navigate(['/hero', this.index]);

    // Usando el Output y EventEmitter
    // this.selectedHero.emit(this.index);
  }

}
