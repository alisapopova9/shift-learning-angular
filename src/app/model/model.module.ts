import { NgModule } from '@angular/core';
import { CardRepository } from './card.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
  providers: [StaticDataSource, CardRepository]
})
export class ModelModule { }
