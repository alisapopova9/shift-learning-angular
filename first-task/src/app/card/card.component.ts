import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public name: string;
  @Input() public description: string;
  @Input() public img: string;

  constructor() { }

  public ngOnInit(): void {
    this.img = '../../assets/images/cards/' + this.img;
  }

}
