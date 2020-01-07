import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {
  @Input() public icon: string;
  @Input() public name: string;

  constructor() { }

  public ngOnInit(): void {
    this.icon = '../../assets/images/icons/' + this.icon;
  }

}
