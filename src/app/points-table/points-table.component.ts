import {Component, Input, OnInit} from '@angular/core';
import {Point} from '../model/point.model';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {
  @Input() public points: Point[];

  constructor() { }

  public ngOnInit(): void {
  }

}
