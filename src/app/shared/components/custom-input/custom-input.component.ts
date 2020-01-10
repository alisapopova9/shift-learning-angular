import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();

  public value: string = null;

  constructor() { }

  public ngOnInit(): void {
  }

  public onValueChanged(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

}
