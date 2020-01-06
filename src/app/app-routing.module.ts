import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointsComponent } from './points/points.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'points',
    component: PointsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
