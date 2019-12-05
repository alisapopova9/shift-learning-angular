import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './cards.component';
import { ModelModule } from '../model/model.module';
import { CardModule } from '../card/card.module';

@NgModule({
  imports: [BrowserModule, ModelModule, CardModule],
  declarations: [CardsComponent],
  exports: [CardsComponent]
})
export class CardsModule { }
