import { Component, OnInit } from '@angular/core';
import { PointRepository } from '../../../model/point.repository';
import { Point } from '../../../model/point.model';
import {CardRepository} from '../../../model/card.repository';
import {Card} from '../../../model/card.model';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  private value: string = null;

  get points(): Point[] {
    return this.pointRepo.getPoints();
  }

  get cards(): Card[] {
    return this.cardRepo.getCards();
  }

  constructor(private pointRepo: PointRepository,
              private cardRepo: CardRepository) { }

  public ngOnInit(): void {
  }

  public onValueChanged(value: string): void {
    this.value = value;
  }
}
