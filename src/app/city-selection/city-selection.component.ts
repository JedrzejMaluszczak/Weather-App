import { Component } from '@angular/core';

import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionComponent {
  options = [
    { name: 'London', code: 'gb' },
    { name: 'Wroclaw', code: 'pl' },
    { name: 'San Francisco', code: 'us' },
  ];

  selected = '';

  constructor(private forecastService: ForecastService) {
  }

  onCityChange() {
    const selectedCity = this.options[this.selected];
    this.forecastService.createStatistics(selectedCity.name, selectedCity.code);
  }
}
