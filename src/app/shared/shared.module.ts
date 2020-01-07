import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { PointsSearchPipe } from './pipes/search/search.pipe';
import { SearchTagComponent } from './components/search-tag/search-tag.component';

@NgModule({
  declarations: [CustomInputComponent, CustomSelectComponent, PointsSearchPipe, SearchTagComponent],
  exports: [CustomInputComponent, CustomSelectComponent, PointsSearchPipe, SearchTagComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
