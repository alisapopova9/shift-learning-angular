import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointsComponent } from './pages/points/points/points.component';
import { CardsComponent } from './pages/cards/cards/cards.component';

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
