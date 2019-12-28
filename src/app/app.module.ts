import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContentComponent } from './content/content.component';
import {CardModule} from './card/card.module';
import { PointsComponent } from './points/points.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ContentComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
