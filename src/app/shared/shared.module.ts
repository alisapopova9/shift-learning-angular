import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { SearchPipe } from './pipes/search/search.pipe';

@NgModule({
  declarations: [CustomInputComponent, CustomSelectComponent, SearchPipe],
  exports: [CustomInputComponent, CustomSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
