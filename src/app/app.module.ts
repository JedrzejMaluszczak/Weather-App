import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DaytimeComponent } from './daytime/daytime.component';
import { HumidityPanelComponent } from './humidity-panel/humidity-panel.component';
import { CitySelectionComponent } from './city-selection/city-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    DaytimeComponent,
    HumidityPanelComponent,
    CitySelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
