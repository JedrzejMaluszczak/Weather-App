import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ForecastService } from '../forecast.service';
import { DataTracker } from '../data-tracker';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  dayTemperature: DataTracker;
  morningTemperature: DataTracker;
  nightTemperature: DataTracker;
  humidity: DataTracker;
  private subscription = new Subscription();

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.subscription.add(this.forecastService.dayTemperature$
      .subscribe(data => this.dayTemperature = data));
    this.subscription.add(this.forecastService.nightTemperature$
      .subscribe(data => this.nightTemperature = data));
    this.subscription.add(this.forecastService.morningTemperature$
      .subscribe(data => this.morningTemperature = data));
    this.subscription.add(this.forecastService.humidity$
      .subscribe(data => this.humidity = data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
