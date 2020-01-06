import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PointRepository } from '../model/point.repository';
import { Point } from '../model/point.model';
import {CardRepository} from '../model/card.repository';
import {Card} from '../model/card.model';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  public searchForm: FormGroup;
  private query: string = null;

  get points(): Point[] {
    return this.pointRepo.getPoints();
  }

  get cards(): Card[] {
    return this.cardRepo.getCards();
  }

  constructor(private fb: FormBuilder,
              private pointRepo: PointRepository,
              private cardRepo: CardRepository) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public setQuery(value: string): void {
    this.query = value;
  }

  private initForm(): void {
    this.searchForm = this.fb.group({
      city: [''],
      cardType: ['all']
    });
  }
}
