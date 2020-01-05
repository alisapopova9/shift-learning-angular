import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContentComponent } from './content/content.component';
import { CardModule } from './card/card.module';
import { PointsComponent } from './points/points.component';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from './shared/components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ContentComponent,
    PointsComponent,
    CustomInputComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
