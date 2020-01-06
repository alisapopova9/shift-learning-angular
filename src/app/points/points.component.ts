import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PointRepository } from '../model/point.repository';
import { Point } from '../model/point.model';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  public searchForm: FormGroup;

  get points(): Point[] {
    return this.repo.getPoints();
  }

  constructor(private fb: FormBuilder, private repo: PointRepository) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.searchForm = this.fb.group({
      city: ['Новосибирск'],
      cardType: ['Все транспортные карты']
    });
  }

}
