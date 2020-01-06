import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() public form: FormGroup;

  @Output() public queryChange: EventEmitter = new EventEmitter();

  private query: string = null;

  constructor() { }

  public ngOnInit(): void {
  }

  private onQueryChanged(query: string): void {
    this.query = query;
    this.queryChange.emit(this.query);
  }

}
