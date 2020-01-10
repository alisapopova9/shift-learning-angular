import { Component, OnInit } from '@angular/core';
import { Card } from '../../../model/card.model';
import { CardRepository } from '../../../model/card.repository';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  get cards(): Card[] {
    return this.repository.getCards();
  }

  constructor(private repository: CardRepository) { }

  public ngOnInit(): void {
  }

}
