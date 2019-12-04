import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { StaticDataSource } from './static.datasource';

@Injectable({
  providedIn: 'root'
})
export class CardRepository {
  private cards: Card[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getCards().subscribe((data: Card[]) => {
      this.cards = data;
    });
  }

  public getCards(): Card[] {
    return this.cards;
  }
}
