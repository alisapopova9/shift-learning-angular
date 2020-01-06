import { Injectable } from '@angular/core';
import { Point } from './point.model';
import { StaticDataSource } from './static.datasource';

@Injectable({
  providedIn: 'root'
})
export class PointRepository {
  private points: Point[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getPoints().subscribe((data: Point[]) => {
      this.points = data;
    });
  }

  public getPoints(): Point[] {
    return this.points;
  }
}
