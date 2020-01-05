import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
