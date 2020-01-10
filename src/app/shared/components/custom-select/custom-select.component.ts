import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../model/card.model';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input() public cards: Card[];

  constructor() { }

  public ngOnInit(): void {
  }

}
